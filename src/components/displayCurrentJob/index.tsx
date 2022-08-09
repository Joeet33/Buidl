import { useMoralis } from "react-moralis";

export const DisplayCurrentJob = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <div>Current Work: {user && user?.attributes?.currentJob}</div>;
};
