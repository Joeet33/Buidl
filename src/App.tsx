import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { MarketPlaceEmployee } from "./pages/marketplaceEmployee";
import { MarketPlaceEmployer } from "./pages/marketplaceEmployer";
import { ROUTER_PATHS } from "./routerPaths";
import { Signup } from "./pages/signup";
import { useContext } from "react";
import { Web3Context } from "./context/web3Context";
import { MoralisProvider } from "react-moralis";

export const App = () => {
  const { currentAccount }: any = useContext(Web3Context);

  //protected routes
  const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn;
  };

  const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <MoralisProvider
      appId="Op5cVxb4NoHXps5Gq12XEVH5bebIhMcBU1L75MGm"
      serverUrl="https://d9nzbudxphey.usemoralis.com:2053/server"
    >
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER_PATHS.SIGNUP} element={<Signup />} />
          <Route element={<ProtectedRoutes />}>
            <Route
              path={ROUTER_PATHS.EMPLOYER}
              element={<MarketPlaceEmployer />}
            />
            <Route
              path={ROUTER_PATHS.EMPLOYEE}
              element={<MarketPlaceEmployee />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoralisProvider>
  );
};
