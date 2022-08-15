import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";
import { TypeCompany } from "../../components/walletTypeCompany";
import { TypeUser } from "../../components/walletTypeUser";
import { ROUTER_PATHS } from "../../routerPaths";
import { WalletTypeContainer } from "./index.styles";

export const WalletType = () => {
  const { isAuthenticated, isInitialized, Moralis } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.attributes.Wallet_Type && isAuthenticated) {
      navigate(ROUTER_PATHS.EMPLOYEE);
    }
  }, [isAuthenticated]);

  return (
    <>
      <Nav />
      <BodyContainer>
        <WalletTypeContainer>
          <TypeUser />
          <TypeCompany />
        </WalletTypeContainer>
      </BodyContainer>
    </>
  );
};
