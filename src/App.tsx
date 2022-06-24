import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MarketPlaceEmployee } from "./pages/marketplaceEmployee";
import { MarketPlaceEmployer } from "./pages/marketplaceEmployer";
import { ROUTER_PATHS } from "./routerPaths";
import { Signup } from "./pages/signup";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER_PATHS.SIGNUP} element={<Signup />} />
        <Route path={ROUTER_PATHS.EMPLOYER} element={<MarketPlaceEmployer />} />
        <Route path={ROUTER_PATHS.EMPLOYEE} element={<MarketPlaceEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};
