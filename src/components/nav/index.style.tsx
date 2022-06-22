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
      padding: 0px 20px;
      font-weight: bold;
      text-decoration: none;
      font-size: x-large;
    }
  }
`;

export const StyledLogo = styled.div`
  font-weight: bold;
  font-size: xx-large;
  text-decoration: none;
  cursor: default;
  padding-left: 2vw;
  padding-top: 1.5vh;
`;

export const StyledSearch = styled.div`
  font-weight: bold;
  font-size: xx-large;
  text-decoration: none;
  cursor: default;
  padding-left: 3vw;
  padding-top: 1.5vh;
`;
