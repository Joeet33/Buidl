import { ApplicationFormUser } from "../../components/applicationFormUser";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";

export const ApplicationUser = () => {
  return (
    <>
      <Nav />
      <BodyContainer>
        <ApplicationFormUser />
      </BodyContainer>
    </>
  );
};
