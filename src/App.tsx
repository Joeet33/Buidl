import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Nav } from "./components/nav";
import { Page2 } from "./components/page2";
import { ROUTER_PATHS } from "./routerPaths";

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={ROUTER_PATHS.HOME} element={<Home />} />
        <Route path={ROUTER_PATHS.PAGE2} element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};
