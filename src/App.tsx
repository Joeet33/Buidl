import { Route, Routes, useNavigate } from "react-router-dom";

import { ROUTER_PATHS } from "./routerPaths";
import { Signup } from "./pages/signup";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { ProfileUser } from "./pages/profileUser";
import { WalletType } from "./pages/selectWalletType";
import { ProfileCompany } from "./pages/profileCompany";
import { BrowseUser } from "./pages/browseUser";
import { BrowseCompany } from "./pages/browseCompany";
import { ApplicationCompany } from "./pages/applicationCompany";
import { ApplicationUser } from "./pages/applicationUser";

export const App = () => {
  const { isInitialized, isAuthenticated, Moralis } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      navigate(ROUTER_PATHS.SIGNUP);
    }
  }, [isAuthenticated, isInitialized]);

  useEffect(() => {
    if (isAuthenticated && !user?.attributes.walletType) {
      navigate(ROUTER_PATHS.WALLET_TYPE);
    }
  }, [isAuthenticated, user?.attributes.walletType]);

  return (
    <Routes>
      <Route path={ROUTER_PATHS.SIGNUP} element={<Signup />} />

      <Route path={ROUTER_PATHS.WALLET_TYPE} element={<WalletType />} />
      <Route
        path={ROUTER_PATHS.BROWSE}
        element={
          user?.attributes.walletType === "users" ? (
            <BrowseCompany />
          ) : (
            <BrowseUser />
          )
        }
      />

      <Route
        path={ROUTER_PATHS.APPLICATIONS}
        element={
          user?.attributes.walletType === "users" ? (
            <ApplicationUser />
          ) : (
            <ApplicationCompany />
          )
        }
      />

      <Route
        path={ROUTER_PATHS.PROFILE}
        element={
          user?.attributes.walletType === "users" ? (
            <ProfileUser />
          ) : (
            <ProfileCompany />
          )
        }
      />
    </Routes>
  );
};
