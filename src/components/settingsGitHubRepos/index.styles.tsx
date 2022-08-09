import styled from "styled-components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: auto;
  list-style-type: none;
  li {
    padding-left: 1vw;
  }
`;