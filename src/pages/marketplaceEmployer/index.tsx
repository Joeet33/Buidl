import GitHubCalendar from "react-github-calendar";
import { useMoralis } from "react-moralis";
import { StyledContainer } from "../../components/main/mainWrapper";
import { Nav } from "../../components/nav";

export const MarketPlaceEmployer = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  return (
    <>
      <Nav />
      <StyledContainer>
        employer
        {isInitialized && (
          <GitHubCalendar username={user && user?.attributes?.github?.login} />
        )}
      </StyledContainer>
    </>
  );
};
