import { ConnectContainer } from "./index.style";
import { useMoralis } from "react-moralis";

export const Connect = () => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  return (
    <ConnectContainer>
      <h1>Buidl</h1>
      <button
        type="button"
        onClick={() =>
          authenticate({
            signingMessage: "Connect to our site via your wallet.",
          })
        }
      >
        login
      </button>
      <button type="button" onClick={() => logout()}>
        logout
      </button>
      <button type="button" onClick={() => console.log(isAuthenticated)}>
        test
      </button>
    </ConnectContainer>
  );
};
