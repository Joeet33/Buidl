import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  margin-right: 5vw;
  margin-left: 5vw;
  width: 25vw;
  height: 25vh;
  border-color: black;
  color: black;
  font-family: "Oswald";
  :hover {
    background-color: rgba(60, 60, 60, 0.75);
    border-color: rgba(60, 60, 60, 0.75);
    color: white;
  }
`;
