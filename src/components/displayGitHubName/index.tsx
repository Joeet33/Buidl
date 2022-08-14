import { useMoralis } from "react-moralis";
import { NameContainer } from "./index.styles";

export const DisplayGitHubName = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      {user?.attributes.github && (
        <NameContainer>Name: {user.attributes.github.login}</NameContainer>
      )}
    </>
  );
};
