import { useEffect, useRef, useState } from "react";
import { DisplayPfp } from "../../components/displayPfp";
import { DisplayUsername } from "../../components/displayUsername";
import { DisplayBio } from "../../components/displayBio";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
// import { DisplayForm } from "../../components/displayForm";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";
import { DisplayGitHubName } from "../../components/displayGitHubName";
import {
  ProfileDetails,
  BtnContainer,
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
import { GitHubLogin } from "../../components/displayGitHubLogin";
// import { EditForm } from "../../components/displayEditForm";
import { GitHubForm } from "../../components/displayGitHubForm";
import { ModalContainer } from "../../components/modalPopup/index.styles";
import { DisplayForm } from "../../components/modalPopup";
import { FormCard } from "../../components/displayForm";

export const Profile = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  const [showLogin, setShowLogin] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleLoginChange = () => {
    setShowLogin(!showLogin);
  };

  const handleFormChange = () => {
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
            <BtnContainer>
              {/* <EditForm formChange={handleChange} /> */}
              <button onClick={handleFormChange}>Edit Profile</button>
            </BtnContainer>
          </FlexBox3>
        </ProfileDetails>

        {showForm && (
          <DisplayForm onClickClose={handleFormChange}>
            <FormCard closeModal={handleFormChange} />
          </DisplayForm>
        )}

        {showLogin && (
          <DisplayForm onClickClose={handleLoginChange}>
            <GitHubForm loginChange={handleLoginChange} />
          </DisplayForm>
        )}

        {user?.attributes.github ? (
          <>
            <RepoDetails>
              <DisplayGitHubName />
              <DisplayRepos />
            </RepoDetails>
            <ActivityDetails>
              <DisplayGitHubActivity />
            </ActivityDetails>
          </>
        ) : (
          <GitHubLogin loginChange={handleLoginChange} />
        )}
      </StyledContainer>
    </>
  );
};
