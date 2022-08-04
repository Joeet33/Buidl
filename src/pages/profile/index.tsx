import { useState } from "react";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { SettingsForm } from "../../components/settingsForm";
import { SettingsPfp } from "../../components/settingsPfp";

export const Profile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Nav />
      <StyledContainer>
        <button onClick={handleChange}>Edit</button>

        {showForm && <SettingsForm close={handleChange}/>}
      </StyledContainer>
    </>
  );
};
