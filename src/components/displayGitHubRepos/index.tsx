import { useMoralis } from "react-moralis";
import { RepositoriesList } from "../settingsGitHubRepos";

export const DisplayRepos = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <RepositoriesList
        repositoriesUrl={user && user.attributes.github.repos_url}
      />
    </>
  );
};
