import { useMoralis } from "react-moralis";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";

export const MarketPlaceEmployee = () => {
  const { Moralis, isAuthenticated, account } = useMoralis();

  const user = Moralis.User.current();
  return (
    <>
      <Nav />
      <StyledContainer>
        <div>employee</div>
        <div>{user?.attributes?.username}</div>
      </StyledContainer>
    </>
  );
};
