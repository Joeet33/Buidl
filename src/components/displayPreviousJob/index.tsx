import { useMoralis } from "react-moralis";

export const DisplayPreviousJob = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <div>Previous Company: {user && user?.attributes?.previousJob}</div>;
};
