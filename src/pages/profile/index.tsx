import { useState } from "react";
import { DisplayPfp } from "../../components/displayPfp";
import { DisplayUsername } from "../../components/displayUsername";
import { DisplayBio } from "../../components/displayBio";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { SettingsForm } from "../../components/settingsForm";
import { DisplayRepos } from "../../components/displayGitHubRepos";
import { DisplayGitHubActivity } from "../../components/displayGitHubActivity";

export const Profile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Nav />
      <StyledContainer>
        <DisplayPfp />
        <DisplayUsername />
        <DisplayBio />
        <DisplayRepos />
        <DisplayGitHubActivity />


        <button onClick={handleChange}>Edit</button>

        {showForm && <SettingsForm close={handleChange} />}
      </StyledContainer>
    </>
  );
};
