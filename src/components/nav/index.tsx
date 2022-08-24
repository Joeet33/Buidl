import { useMoralis } from "react-moralis";
import { NavLink } from "react-router-dom";
import { ROUTER_PATHS } from "../../routerPaths";
import { StyledButton } from "./index.muistyles";
import { FlexBox1, FlexBox2, FlexBox3, NavContainer } from "./index.style";

export const Nav = () => {
  const { isInitialized, isAuthenticated, Moralis, logout } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <NavContainer>
      <FlexBox1>
        <a href={ROUTER_PATHS.BROWSE}>Buidl</a>
      </FlexBox1>
<FlexBox2>
  {user && user.attributes.walletType === "users" ? <div>User</div>
  :<div>Company</div>}
</FlexBox2>
      <FlexBox3>
        <ul>
          <li>
            <NavLink to={ROUTER_PATHS.APPLICATIONS}>Apply</NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.BROWSE}>Browse</NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.PROFILE}>Profile</NavLink>
          </li>
        </ul>
        <StyledButton onClick={logout} variant="contained">
          Disconnect
        </StyledButton>
      </FlexBox3>
    </NavContainer>
  );
};
