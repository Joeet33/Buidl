import { useMoralis } from "react-moralis";
import { RepositoriesList } from "../settingsGitHubRepos";

//dont need this just display in profile

export const DisplayGitHubName = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      {user?.attributes.github && (
        <div>Github name: {user.attributes.github.login}</div>
      )}
    </>
  );
};
