import styled from "styled-components";
import Card from "@mui/material/Card";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  background-color: rgba(60, 60, 60, 0.75);
`;

export const StyledCard = styled(Card)`
  width: auto;
  height: auto;
  margin: auto;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 4vh;
  padding-bottom: 6vh;
`;
