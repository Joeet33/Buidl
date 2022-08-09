import GitHubCalendar from "react-github-calendar";
import { useMoralis } from "react-moralis";

export const DisplayGitHubActivity = () => {
  const { Moralis, isInitialized, isAuthenticated } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      {user?.attributes.github && (
        <GitHubCalendar
          username={user?.attributes?.github?.login}
          style={{ margin: "auto" }}
        />
      )}
    </>
  );
};
