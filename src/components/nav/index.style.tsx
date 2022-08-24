import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

export const FlexBox1 = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 4vw;
  a {
    display: -webkit-inline-box;
    font-weight: bold;
    font-size: 5vh;
    color: black;
    text-decoration: none;
    cursor: pointer;
    padding-left: 2vw;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.1);
    }
    &.active {
      color: rgba(136, 49, 0, 0.2);
    }
  }
`;

export const FlexBox2 = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
  font-size: 4vh;
  color: white;
  -webkit-text-stroke: 1px black;
  cursor: default;
  padding-left: 2vw;
  transition: transform 0.2s;
`;

export const FlexBox3 = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  padding-right: 3vw;
  ul {
    list-style: none;
    padding-right: 3vw;

    li {
      display: inline-flex;
      padding-right: 4vw;
      font-weight: bold;
      font-size: 4vh;
      a {
        text-decoration: none;
        color: black;
        transition: transform 0.2s;

        :hover {
          transform: scale(1.1);
        }
        &.active {
          color: rgba(136, 49, 0, 0.2);
        }
      }
    }
  }
`;

export const StyledListActive = styled.li`
  display: inline-flex;
  padding-right: 4vw;
  font-weight: bold;
  font-size: 4vh;
  a {
    text-decoration: none;
    color: rgba(136, 49, 0, 0.2);
  }
`;
