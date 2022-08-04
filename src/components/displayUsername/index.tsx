import { useMoralis } from "react-moralis";

export const DisplayUsername = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <> {user && <div>{user?.attributes?.username}</div>}</>;
};
