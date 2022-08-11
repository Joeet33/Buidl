import { useState } from "react";
import { DisplayPfp } from "../../components/displayPfp";
import { DisplayUsername } from "../../components/displayUsername";
import { DisplayBio } from "../../components/displayBio";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";
import { DisplayGitHubName } from "../../components/displayGitHubName";
import {
  BtnContainer,
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
  DisplayProfileContainer,
  DisplayRepoContainer,
  DisplayActivityContainer,
} from "./index.styles";
import { useMoralis } from "react-moralis";
import { DisplayPreviousJob } from "../../components/displayPreviousJob";
import { DisplayCurrentJob } from "../../components/displayCurrentJob";
import { DisplayEmploymentStatus } from "../../components/displayEmploymentStatus";
import { GitHubNotLoggedIn } from "../../components/gitHubNotLoggedIn";
import { GitHubForm } from "../../components/gitHubForm";
import { DisplayForm } from "../../components/modalPopup";
import { FormCard } from "../../components/profileForm";

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
      <BodyContainer>
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
              <button onClick={handleFormChange}>Edit Profile</button>
            </BtnContainer>
          </FlexBox3>
        </DisplayProfileContainer>

        {showForm && (
          <DisplayForm onClickClose={handleFormChange}>
            <FormCard />
          </DisplayForm>
        )}

        {showLogin && (
          <DisplayForm onClickClose={handleLoginChange}>
            <GitHubForm />
          </DisplayForm>
        )}

        {user?.attributes.github ? (
          <>
            <DisplayRepoContainer>
              <DisplayGitHubName />
              <DisplayRepos />
            </DisplayRepoContainer>
            <DisplayActivityContainer>
              <DisplayGitHubActivity />
            </DisplayActivityContainer>
          </>
        ) : (
          <GitHubNotLoggedIn loginChange={handleLoginChange} />
        )}
      </BodyContainer>
    </>
  );
};
