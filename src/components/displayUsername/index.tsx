import { useMoralis } from "react-moralis";
import { StyledUsername } from "./index.styles";

export const DisplayUsername = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <StyledUsername>{user && user?.attributes?.username}</StyledUsername>;
};
