import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MarketPlaceEmployee } from "./pages/marketplaceEmployee";
import { MarketPlaceEmployer } from "./pages/marketplaceEmployer";
import { Nav } from "./components/nav";
import { ROUTER_PATHS } from "./routerPaths";
import { Connect } from "./components/connect";

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Connect />
      <Routes>
        <Route path={ROUTER_PATHS.EMPLOYER} element={<MarketPlaceEmployer />} />
        <Route path={ROUTER_PATHS.EMPLOYEE} element={<MarketPlaceEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};
