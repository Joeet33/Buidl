import { useMoralis } from "react-moralis";
import { StylePfp } from "./index.styles";

export const DisplayPfp = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return <> {user && <StylePfp src={user?.attributes?.pfp}></StylePfp>}</>;
};
