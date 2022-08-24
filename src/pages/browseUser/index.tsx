import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { DisplayBrowseUser } from "../../components/displayBrowseUser";
import { Nav } from "../../components/nav";

export const BrowseUser = () => {
  return (
    <>
      <Nav />
      <BodyContainer>
        <DisplayBrowseUser />
      </BodyContainer>
    </>
  );
};
