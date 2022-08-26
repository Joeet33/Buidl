import { useMoralis } from "react-moralis";
import { DisplayDiscord } from "../displayDiscord";
import { DisplayTelegram } from "../displayTelegram";
import { DisplayTwitter } from "../displayTwitter";
import {
  DisplayContactsContainer,
  Flexbox,
  StyledContacts,
  StyledHeader,
} from "./index.styles";
import { telegram, twitter, discord } from "../../assets/index";

export const DisplayContactForm = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <DisplayContactsContainer>
        <StyledHeader>Contacts</StyledHeader>
        <Flexbox>
          {user?.attributes.twitter ? (
            <DisplayTwitter />
          ) : (
            <StyledContacts>
              <img src={twitter}></img>
              <div>Twitter</div>
            </StyledContacts>
          )}

          {user?.attributes.telegram ? (
            <DisplayTelegram />
          ) : (
            <StyledContacts>
              <img src={telegram}></img>
              <div>Telegram</div>
            </StyledContacts>
          )}

          {user?.attributes.discord ? (
            <DisplayDiscord />
          ) : (
            <StyledContacts>
              <img src={discord}></img>
              <div>Discord</div>
            </StyledContacts>
          )}
        </Flexbox>
      </DisplayContactsContainer>
    </>
  );
};
