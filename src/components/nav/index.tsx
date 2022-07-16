import { Link } from "react-router-dom";
import { ROUTER_PATHS } from "../../routerPaths";
import { NavContainer, StyledLogo, StyledSearch } from "./index.style";

export const Nav = () => {
  return (
    <NavContainer>
      <div>
        <StyledLogo to={ROUTER_PATHS.EMPLOYEE}>Logo</StyledLogo>
        <StyledSearch>Search bar</StyledSearch>
      </div>

      <ul>
        <li>
          <Link to="/">Apply</Link>
        </li>
        <li>
          <Link to="/">Browse</Link>
        </li>
        <li>
          <Link to={ROUTER_PATHS.PROFILE}>Profile</Link>
        </li>
      </ul>
    </NavContainer>
  );
};
