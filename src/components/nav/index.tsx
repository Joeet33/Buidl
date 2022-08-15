import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { ROUTER_PATHS } from "../../routerPaths";
import { StyledButton } from "./index.muistyles";
import { FlexBox1, FlexBox2, NavContainer, StyledLogo } from "./index.style";

export const Nav = () => {
  const { logout } = useMoralis();
  return (
    <NavContainer>
      <FlexBox1>
        <StyledLogo to={ROUTER_PATHS.EMPLOYEE}>Buidl</StyledLogo>
      </FlexBox1>

      <FlexBox2>
        <ul>
          <li>
            <Link to="">Apply</Link>
          </li>
          <li>
            <Link to="">Browse</Link>
          </li>
          <li>
            <Link to={ROUTER_PATHS.PROFILE}>Profile</Link>
          </li>
        </ul>
        <StyledButton onClick={logout} variant="contained">
          Disconnect
        </StyledButton>
      </FlexBox2>
    </NavContainer>
  );
};
