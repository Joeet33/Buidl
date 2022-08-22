import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";
import { TypeCompany } from "../../components/walletTypeCompany";

import { TypeUser } from "../../components/walletTypeUser";
import { ROUTER_PATHS } from "../../routerPaths";
import { WalletTypeContainer } from "./index.styles";

export const WalletType = () => {
  const { isInitialized, Moralis, isAuthenticated } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    saveEdit("company");
  };

  const handleUserClick = () => {
    saveEdit("users");
  };

  const saveEdit = async (walletType: string) => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    myDetails?.set("walletType", walletType);

    try {
      await myDetails?.save();
      navigate(ROUTER_PATHS.APPLICATIONS);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <BodyContainer>
        <WalletTypeContainer>
          <TypeUser clickUser={handleUserClick} />
          <TypeCompany clickCompany={handleCompanyClick} />
        </WalletTypeContainer>
      </BodyContainer>
    </>
  );
};
