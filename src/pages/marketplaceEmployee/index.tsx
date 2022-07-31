import { useMoralis } from "react-moralis";
import { Dashboard } from "../../components/gitHubDashboard";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";
import { PfpDisplay } from "../../components/pfpSelect/index.style";

export const MarketPlaceEmployee = () => {
  const { Moralis, logout, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;
  return (
    <>
      <Nav />
      <StyledContainer>
        <div>employee</div>
        {user && <div>{user?.attributes?.username}</div>}
        {user && <PfpDisplay src={user?.attributes?.pfp}></PfpDisplay>}

        <button type="button" onClick={logout}>
          logout
        </button>

        <br></br>

        <Dashboard />
      </StyledContainer>
    </>
  );
};
