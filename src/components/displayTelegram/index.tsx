import { useMoralis } from "react-moralis";
import { StyledContacts } from "../displayContactForm/index.styles";

export const DisplayTelegram = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <StyledContacts>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png"
        }
      ></img>
      <div>Telegram: {user && user?.attributes?.telegram}</div>
    </StyledContacts>
  );
};
