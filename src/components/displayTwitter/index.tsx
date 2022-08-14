import { useMoralis } from "react-moralis";
import { StyledContacts } from "../displayContactForm/index.styles";

export const DisplayTwitter = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <StyledContacts>
      <img
        src={"https://assets.stickpng.com/thumbs/58e9196deb97430e819064f6.png"}
      ></img>
      <div>Twitter: {user && user?.attributes?.twitter}</div>
    </StyledContacts>
  );
};
