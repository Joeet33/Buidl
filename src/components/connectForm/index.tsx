import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router";
import { ROUTER_PATHS } from "../../routerPaths";
import { ConnectContainer } from "./index.style";

export const ConnectForm = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTER_PATHS.EMPLOYEE);
    }
  }, [isAuthenticated]);

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
