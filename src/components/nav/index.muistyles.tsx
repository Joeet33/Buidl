import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
     cursor: pointer;
  color: white;
  border-color: black;
  margin: auto;
  font-weight: bold;
  background-color: black;

  :hover {
    background-color: white;
    color: black;
    font-weight: bold;
    border-color: black;
  }
`