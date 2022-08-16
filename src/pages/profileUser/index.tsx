import { useState } from "react";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";
import { DisplayGitHubName } from "../../components/displayGitHubName";
import {
  DisplayRepoContainer,
  DisplayActivityContainer,
  ButtonContainer,
} from "./index.styles";
import { useMoralis } from "react-moralis";
import { GitHubNotLoggedIn } from "../../components/gitHubNotLoggedIn";
import { GitHubForm } from "../../components/gitHubForm";
import { DisplayForm } from "../../components/modalPopup";
import { FormCard } from "../../components/settingsProfileForm";
import { DisplayProfileForm } from "../../components/displayProfileForm";
import { DisplayContactForm } from "../../components/displayContactForm";
import { StyledButton } from "../../components/settingsProfileForm/index.muistyles";
import { StyledHeader } from "../../components/displayContactForm/index.styles";

export const ProfileUser = () => {
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
        <DisplayProfileForm editProfile={handleFormChange} />

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

        <DisplayContactForm />

        {user?.attributes.github ? (
          <>
            <DisplayRepoContainer>
              <StyledHeader>Github Repos</StyledHeader>
              <DisplayGitHubName />
              <DisplayRepos />
              <ButtonContainer>
                <StyledButton variant="contained" onClick={handleLoginChange}>
                  change Github
                </StyledButton>
              </ButtonContainer>
            </DisplayRepoContainer>
            <DisplayActivityContainer>
            <StyledHeader>Github Activity</StyledHeader>
              <DisplayGitHubActivity />
            </DisplayActivityContainer>
            <br></br>
          </>
        ) : (
          <GitHubNotLoggedIn loginChange={handleLoginChange} />
        )}
      </BodyContainer>
    </>
  );
};
