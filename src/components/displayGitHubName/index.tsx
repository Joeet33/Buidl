import { useMoralis } from "react-moralis";

export const DisplayGitHubName = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      {user?.attributes.github && (
        <div>
          Github name: <br></br> {user.attributes.github.login}
        </div>
      )}
    </>
  );
};
