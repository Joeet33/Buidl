import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { SettingsPfp } from "../../components/settingsPfp";

export const Profile = () => {
  return (
    <>
      <Nav />
      <StyledContainer>
        <SettingsPfp />
      </StyledContainer>
    </>
  );
};
