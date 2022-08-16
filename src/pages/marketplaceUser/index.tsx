import { useMoralis } from "react-moralis";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";

import { Nav } from "../../components/nav";

export const MarketPlaceEmployee = () => {
  const { logout } = useMoralis();
  return (
    <>
      <Nav />
      <BodyContainer>
        <button onClick={logout}>logout</button>
      </BodyContainer>
    </>
  );
};
