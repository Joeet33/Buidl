import { useMoralis } from "react-moralis";

export const DisplayEmploymentStatus = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <div>Employment Status: {user && user?.attributes?.employmentStatus}</div>
  );
};
