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
              <img
                src={
                  "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                }
              ></img>
              <div>Twitter</div>
            </StyledContacts>
          )}

          {user?.attributes.telegram ? (
            <DisplayTelegram />
          ) : (
            <StyledContacts>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png"
                }
              ></img>
              <div>Telegram</div>
            </StyledContacts>
          )}

          {user?.attributes.discord ? (
            <DisplayDiscord />
          ) : (
            <StyledContacts>
              <img
                src={
                  "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"
                }
              ></img>
              <div>Discord</div>
            </StyledContacts>
          )}
        </Flexbox>
      </DisplayContactsContainer>
    </>
  );
};
