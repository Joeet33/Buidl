import { useMoralis } from "react-moralis";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";

export const MarketPlaceEmployee = () => {
  const { logout } = useMoralis();
  return (
    <>
      <Nav />
      <StyledContainer>
        <button onClick={logout}>logout</button>
      </StyledContainer>
    </>
  );
};
