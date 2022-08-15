import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

export const ConnectContainer = styled(Card)`
  position: relative;
  width: 40%;
  margin-left: auto;
  margin-right: 15vw;
  text-align: center;
  height: fit-content;
  border-style: solid;
  background-color: white;

  h1 {
    color: black;
    padding-bottom: 30vh;
    padding-left: 4vw;
    padding-right: 4vw;
  }
`;

export const StyledButton = styled(Button)`
  margin: auto;
  background-color: black;

  :hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

export const FlexBox = styled.div`
  padding-bottom: 10vh;
`;
