import { ApplicationFormCompany } from "../../components/applicationFormCompany";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";

export const ApplicationCompany = () => {
  return (
    <>
      <Nav />
      <BodyContainer>
        <ApplicationFormCompany />
      </BodyContainer>
    </>
  );
};
