import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { Settings } from "../../components/settings";

export const Profile = () => {
  return (
    <>
      <Nav />
      <StyledContainer>
        <Settings />
      </StyledContainer>
    </>
  );
};
