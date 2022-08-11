import { useMoralis } from "react-moralis";
import { DisplayBio } from "../displayBio";
import { DisplayCurrentJob } from "../displayCurrentJob";
import { DisplayEmploymentStatus } from "../displayEmploymentStatus";
import { DisplayPfp } from "../displayPfp";
import { DisplayPreviousJob } from "../displayPreviousJob";
import { DisplayUsername } from "../displayUsername";
import {
  BtnContainer,
  DisplayProfileContainer,
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
} from "./index.styles";

interface Props {
  editProfile: () => void;
}

export const DisplayProfileForm = ({ editProfile }: Props) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <DisplayProfileContainer>
      <FlexBox1>
        <DisplayPfp />
        <FlexBox2>
          <DisplayUsername />
          <DisplayBio />
        </FlexBox2>
      </FlexBox1>
      <FlexBox3>
        <FlexBox4>
          {user?.attributes.employmentStatus && <DisplayEmploymentStatus />}
          {user?.attributes.currentJob && <DisplayCurrentJob />}
          {user?.attributes.previousJob && <DisplayPreviousJob />}
        </FlexBox4>
        <BtnContainer>
          <button onClick={editProfile}>Edit Profile</button>
        </BtnContainer>
      </FlexBox3>
    </DisplayProfileContainer>
  );
};
