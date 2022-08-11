import { useMoralis } from "react-moralis";
import { UsernameContainer } from "./index.styles";

export const DisplayUsername = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <UsernameContainer>{user && user?.attributes?.username}</UsernameContainer>
  );
};
