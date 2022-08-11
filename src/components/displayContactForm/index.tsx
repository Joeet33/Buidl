import { useMoralis } from "react-moralis";
import { DisplayDiscord } from "../displayDiscord";
import { DisplayTelegram } from "../displayTelegram";
import { DisplayTwitter } from "../displayTwitter";
import { DisplayContactsContainer, Flexbox, StyledContacts } from "./index.styles";

export const DisplayContactForm = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <DisplayContactsContainer>
        <div>Contacts</div>
        <Flexbox>
          {user?.attributes.twitter ? (
            <DisplayTwitter />
          ) : (
            <StyledContacts>
              <img
                src={
                  "http://store-images.s-microsoft.com/image/apps.26737.9007199266244427.c75d2ced-a383-40dc-babd-1ad2ceb13c86.ed1d047e-03d9-4cd8-a342-c4ade1e58951"
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
                  "https://sparkcdnwus2.azureedge.net/sparkimageassets/XPDC2RH70K22MN-08afd558-a61c-4a63-9171-d3f199738e9f"
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
