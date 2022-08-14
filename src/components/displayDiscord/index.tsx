import { useMoralis } from "react-moralis";
import { StyledContacts } from "../displayContactForm/index.styles";

export const DisplayDiscord = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <StyledContacts>
      <img
        src={
          "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"
        }
      ></img>
      <div>Discord: {user && user?.attributes?.discord}</div>
    </StyledContacts>
  );
};
