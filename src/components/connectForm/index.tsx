import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router";
import { ROUTER_PATHS } from "../../routerPaths";
import { ConnectContainer, FlexBox, StyledButton } from "./index.style";

export const ConnectForm = () => {
  const { authenticate, isAuthenticated } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTER_PATHS.PROFILE);
    }
  }, [isAuthenticated]);

  return (
    <ConnectContainer>
      <h1>Connect With Wallet</h1>
      <FlexBox>
        <StyledButton
          variant="contained"
          type="button"
          onClick={() =>
            authenticate({
              signingMessage: "Connect to our site via your wallet.",
            })
          }
        >
          Connect
        </StyledButton>
      </FlexBox>
    </ConnectContainer>
  );
};
