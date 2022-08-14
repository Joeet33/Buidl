import styled from "styled-components";

import Card from "@mui/material/Card";

export const DisplayContactsContainer = styled(Card)`
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 1vw;
  margin-bottom: 2vh;
  text-align: center;
`;

export const Flexbox = styled.div`
  display: flex;
`;

export const StyledContacts = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.5vh;
  img {
    border-radius: 50%;
    margin-top: 10px;
    width: 80px;
    height: 80px;
    border: 4px;
    border-color: black;
    border-style: solid;
  }
`;

export const StyledHeader = styled.div`
  font-weight: bold;
  font-size: 3vh;
  padding-bottom: 1vh;
  text-align: center;
`;
