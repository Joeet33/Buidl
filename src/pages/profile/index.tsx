import { useState } from "react";
import { DisplayPfp } from "../../components/displayPfp";
import { DisplayUsername } from "../../components/displayUsername";
import { DisplayBio } from "../../components/displayBio";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { SettingsForm } from "../../components/settingsForm";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";
import { DisplayGitHubName } from "../../components/displayGitHubName";
import {
  ProfileDetails,
  EditBtn,
  ActivityDetails,
  RepoDetails,
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
} from "./index.styles";
import { useMoralis } from "react-moralis";
import { DisplayPreviousJob } from "../../components/displayPreviousJob";
import { DisplayCurrentJob } from "../../components/displayCurrentJob";
import { DisplayEmploymentStatus } from "../../components/displayEmploymentStatus";

export const Profile = () => {
  const [showForm, setShowForm] = useState(false);
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const handleChange = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Nav />
      <StyledContainer>
        <ProfileDetails>
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
            <EditBtn>
              <button onClick={handleChange}>Edit Profile</button>
            </EditBtn>
          </FlexBox3>
        </ProfileDetails>

        {showForm && <SettingsForm close={handleChange} />}

        {user?.attributes.github ? (
          <>
            <RepoDetails>
              <DisplayGitHubName />
              <DisplayRepos />
            </RepoDetails>
            <ActivityDetails>
              <DisplayGitHubActivity />
            </ActivityDetails>{" "}
          </>
        ) : (
          <div>Login to github</div>
        )}
      </StyledContainer>
    </>
  );
};
