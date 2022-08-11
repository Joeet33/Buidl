import { useMoralis } from "react-moralis";
import { DisplayBio } from "../displayBio";
import { DisplayCurrentJob } from "../displayCurrentJob";
import { DisplayEmploymentRole } from "../displayEmploymentRole";
import { DisplayPfp } from "../displayPfp";
import { StylePfp } from "../displayPfp/index.styles";
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
    <DisplayProfileContainer >
      <FlexBox1>
        {user?.attributes.pfp ? (
          <DisplayPfp />
        ) : (
          <StylePfp
            src={
              "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
            }
          ></StylePfp>
        )}
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
