import { useMoralis } from "react-moralis";
import { DisplayBio } from "../displayBio";
import { DisplayCurrentJob } from "../displayCurrentJob";
import { DisplayEmploymentRole } from "../displayEmploymentRole";
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
          {user?.attributes.employmentRole ? (
            <DisplayEmploymentRole />
          ) : (
            <div>Employment Role</div>
          )}
          {user?.attributes.currentJob ? (
            <DisplayCurrentJob />
          ) : (
            <div>Current Company</div>
          )}
          {user?.attributes.previousJob ? (
            <DisplayPreviousJob />
          ) : (
            <div>Previous Company</div>
          )}
        </FlexBox4>
        <BtnContainer>
          <button onClick={editProfile}>Edit Profile</button>
        </BtnContainer>
      </FlexBox3>
    </DisplayProfileContainer>
  );
};
