import { useMoralis } from "react-moralis";
import { RepositoriesList } from "../reposGitHubHorizontalScroll";

export const DisplayRepos = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      {user?.attributes.github && (
        <RepositoriesList repositoriesUrl={user.attributes.github.repos_url} />
      )}
    </>
  );
};
