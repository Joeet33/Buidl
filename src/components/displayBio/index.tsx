import { useMoralis } from "react-moralis";
import { BioContainer } from "./index.styles";

export const DisplayBio = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      {user && user?.attributes.bio ? (
        <BioContainer>{user && user?.attributes?.bio}</BioContainer>
      ) : (
        <BioContainer>Bio</BioContainer>
      )}
    </>
  );
};
