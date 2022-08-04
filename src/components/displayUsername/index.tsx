import { useMoralis } from "react-moralis";
import { PfpStyle } from "../settingsPfp/index.style";

export const DisplayUsername = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <> {user && <div>{user?.attributes?.username}</div>}</>;
};
