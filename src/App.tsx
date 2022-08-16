import { Route, Routes, useNavigate } from "react-router-dom";
import { ApplicationUser } from "./pages/applicationUser";
import { ApplicationCompany } from "./pages/applicationCompany";
import { ROUTER_PATHS } from "./routerPaths";
import { Signup } from "./pages/signup";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { ProfileUser } from "./pages/profileUser";
import { WalletType } from "./pages/selectWalletType";
import { ProfileCompany } from "./pages/profileCompany";
import { Home } from "./pages/home";

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
    if (isAuthenticated && !user?.attributes.Wallet_Type) {
      navigate(ROUTER_PATHS.WALLET_TYPE);
    }
  }, [isAuthenticated, user?.attributes.Wallet_Type]);

  return (
    <Routes>
      <Route path={ROUTER_PATHS.SIGNUP} element={<Signup />} />

      <Route path={ROUTER_PATHS.HOME} element={<Home />} />

      <Route path={ROUTER_PATHS.WALLET_TYPE} element={<WalletType />} />
      <Route
        path={ROUTER_PATHS.APPLICATIONS}
        element={
          user?.attributes.Wallet_Type === "users" ? (
            <ApplicationUser />
          ) : (
            <ApplicationCompany />
          )
        }
      />

      <Route
        path={ROUTER_PATHS.PROFILE}
        element={
          user?.attributes.Wallet_Type === "users" ? (
            <ProfileUser />
          ) : (
            <ProfileCompany />
          )
        }
      />
    </Routes>
  );
};
