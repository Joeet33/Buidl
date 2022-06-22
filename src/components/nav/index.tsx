import { Link } from "react-router-dom";
import { NavContainer, StyledLogo, StyledSearch } from "./index.style";

export const Nav = () => {
  return (
    <NavContainer>
      <div>
        <StyledLogo>Logo</StyledLogo>
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
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </NavContainer>
  );
};
