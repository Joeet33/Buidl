import { useMoralis } from "react-moralis";

export const DisplayCurrentJob = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <div>Current Company: {user && user?.attributes?.currentJob}</div>;
};
