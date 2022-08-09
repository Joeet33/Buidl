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
  FlexBoxName,
  FlexBoxBio,
  FlexBoxPfp,
  FlexBoxEmploymentStatus,
  FlexBox,
} from "./index.styles";
import { useMoralis } from "react-moralis";

export const Profile = () => {
  const [showForm, setShowForm] = useState(false);
  const { Moralis, isInitialized, logout } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const handleChange = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Nav />
      <StyledContainer>
        <ProfileDetails>
          <FlexBoxName>
            <DisplayUsername />
          </FlexBoxName>
          <FlexBoxBio>
            <DisplayBio />
          </FlexBoxBio>

          <FlexBoxPfp>
            <DisplayPfp />
          </FlexBoxPfp>
          <FlexBox>
            <FlexBoxEmploymentStatus>
              <div>Employment Status</div>
              <div>Current Company</div>
              <div>Previous Company</div>
            </FlexBoxEmploymentStatus>
            <EditBtn>
              <button onClick={handleChange}>Edit Profile</button>
            </EditBtn>
          </FlexBox>
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

        <button onClick={logout}>logout</button>
      </StyledContainer>
    </>
  );
};
