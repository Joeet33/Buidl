import { useMoralis } from "react-moralis";

export const DisplayBio = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <> {user && <div>{user?.attributes?.bio}</div>}</>;
};
