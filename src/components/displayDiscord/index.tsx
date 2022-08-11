import { useMoralis } from "react-moralis";
import { StyledContacts } from "../displayContactForm/index.styles";

export const DisplayDiscord = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <StyledContacts>
      <img src={"https://sparkcdnwus2.azureedge.net/sparkimageassets/XPDC2RH70K22MN-08afd558-a61c-4a63-9171-d3f199738e9f"}></img>
      <div>{user && user?.attributes?.discord}</div>
    </StyledContacts>
  );
};
