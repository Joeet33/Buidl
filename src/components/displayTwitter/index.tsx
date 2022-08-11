import { useMoralis } from "react-moralis";
import { StyledContacts } from "../displayContactForm/index.styles";

export const DisplayTwitter = () => {
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <StyledContacts>
      <img src={"http://store-images.s-microsoft.com/image/apps.26737.9007199266244427.c75d2ced-a383-40dc-babd-1ad2ceb13c86.ed1d047e-03d9-4cd8-a342-c4ade1e58951"}></img>
      <div>{user && user?.attributes?.twitter}</div>
    </StyledContacts>
  );
};
