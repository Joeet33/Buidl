import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { Settings } from "../../components/settingsDashboard";
import { PfpSelect } from "../../components/settingsPfp";

export const Profile = () => {
  return (
    <>
      <Nav />
      <StyledContainer>
        <Settings />
        <PfpSelect />
      </StyledContainer>
    </>
  );
};
