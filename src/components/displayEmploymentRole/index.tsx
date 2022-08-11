import { useMoralis } from "react-moralis";

export const DisplayEmploymentRole = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <div>Employment Role: {user && user?.attributes?.employmentRole}</div>
  );
};
