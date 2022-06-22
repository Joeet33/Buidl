import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MarketPlaceEmployee } from "./pages/marketplaceEmployee";
import { MarketPlaceEmployer } from "./pages/marketplaceEmployer";
import { Nav } from "./components/nav";
// import { Profile } from "./components/profileEmployee";

import { ROUTER_PATHS } from "./routerPaths";

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path={ROUTER_PATHS.PROFILE} element={<Profile />} /> */}
        <Route path={ROUTER_PATHS.EMPLOYER} element={<MarketPlaceEmployer />} />
        <Route path={ROUTER_PATHS.EMPLOYEE} element={<MarketPlaceEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};
