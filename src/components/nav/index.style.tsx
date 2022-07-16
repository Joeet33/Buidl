import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  div {
    margin-right: auto;
    display: flex;
    flex-direction: row;
  }

  ul {
    list-style: none;

    li {
      display: inline-block;
      padding-right: 4vw;
      font-weight: bold;
      text-decoration: none;
      font-size: 4vh;
    }
  }
`;

export const StyledLogo = styled(Link)`
  display: -webkit-inline-box;
  font-weight: bold;
  font-size: 5vh;
  text-decoration: none;
  cursor: default;
  padding-left: 2vw;
  align-items: center;
`;

export const StyledSearch = styled.div`
  font-weight: bold;
  font-size: 5vh;
  text-decoration: none;
  cursor: default;
  padding-left: 3vw;
  align-items: center;
`;
