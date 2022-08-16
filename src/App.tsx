import { Route, Routes, useNavigate } from "react-router-dom";
import { MarketPlaceEmployee } from "./pages/marketplaceEmployee";
import { MarketPlaceEmployer } from "./pages/marketplaceEmployer";
import { ROUTER_PATHS } from "./routerPaths";
import { Signup } from "./pages/signup";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { ProfileUser } from "./pages/profileUser";
import { WalletType } from "./pages/selectWalletType";
import { ProfileCompany } from "./pages/profileCompany";

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

      <Route path={ROUTER_PATHS.WALLET_TYPE} element={<WalletType />} />
      <Route path={ROUTER_PATHS.EMPLOYER} element={<MarketPlaceEmployer />} />
      <Route path={ROUTER_PATHS.EMPLOYEE} element={<MarketPlaceEmployee />} />

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
