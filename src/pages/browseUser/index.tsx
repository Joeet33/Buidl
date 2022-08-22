import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { DisplayBrowseCompany } from "../../components/displayBrowseCompany";
import { Nav } from "../../components/nav";

export const BrowseUser = () => {
  return (
    <>
      <Nav />
      <BodyContainer>
        <DisplayBrowseCompany />
      </BodyContainer>
    </>
  );
};
