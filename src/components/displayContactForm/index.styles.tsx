import styled from "styled-components";

import Card from "@mui/material/Card";

export const DisplayContactsContainer = styled(Card)`
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 1vw;
  margin-bottom: 2vh;
  position: relative;
  top: 1vh;
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
  img {
    position: relative;
    width: 50%;
    height: 50%;
  }
`;
