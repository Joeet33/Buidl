import { useMoralis } from "react-moralis";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";

export const ApplicationUser = () => {
  const { logout } = useMoralis();
  return (
    <>
      <Nav />
      <BodyContainer>
        <div>user</div>
      </BodyContainer>
    </>
  );
};
