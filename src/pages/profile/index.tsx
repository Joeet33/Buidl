import { useState } from "react";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";
import { DisplayGitHubName } from "../../components/displayGitHubName";
import { DisplayRepoContainer, DisplayActivityContainer } from "./index.styles";
import { useMoralis } from "react-moralis";
import { GitHubNotLoggedIn } from "../../components/gitHubNotLoggedIn";
import { GitHubForm } from "../../components/gitHubForm";
import { DisplayForm } from "../../components/modalPopup";
import { FormCard } from "../../components/settingsProfileForm";
import { DisplayProfileForm } from "../../components/displayProfileForm";
import { DisplayTwitter } from "../../components/displayTwitter";
import { DisplayTelegram } from "../../components/displayTelegram";
import { DisplayDiscord } from "../../components/displayDiscord";
import { DisplayContactForm } from "../../components/displayContactForm";

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
