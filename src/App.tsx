import { Route, Routes, useNavigate } from "react-router-dom";
import { MarketPlaceEmployee } from "./pages/marketplaceEmployee";
import { MarketPlaceEmployer } from "./pages/marketplaceEmployer";
import { ROUTER_PATHS } from "./routerPaths";
import { Signup } from "./pages/signup";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export const App = () => {
  const { isAuthenticated } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTER_PATHS.SIGNUP);
    } else {
      navigate(ROUTER_PATHS.EMPLOYEE);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path={ROUTER_PATHS.SIGNUP} element={<Signup />} />

      <Route path={ROUTER_PATHS.EMPLOYER} element={<MarketPlaceEmployer />} />
      <Route path={ROUTER_PATHS.EMPLOYEE} element={<MarketPlaceEmployee />} />
    </Routes>
  );
};
