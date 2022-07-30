import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { Settings } from "../../components/settings";
import { PfpSelect } from "../../components/pfpSelect";

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
