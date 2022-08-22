import { ApplicationForm } from "../../components/applicationForm";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";

export const ApplicationCompany = () => {
  return (
    <>
      <Nav />
      <BodyContainer>
        <ApplicationForm />
      </BodyContainer>
    </>
  );
};
