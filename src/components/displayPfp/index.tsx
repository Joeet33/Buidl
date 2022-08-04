import { useMoralis } from "react-moralis";
import { PfpStyle } from "../settingsPfp/index.style";

export const DisplayPfp = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <> {user && <PfpStyle src={user?.attributes?.pfp}></PfpStyle>}</>;
};
