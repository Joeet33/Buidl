import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyledButon = styled(Button)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 1%;
  color: black;
  border-color: black;
  margin: auto;
  font-weight: bold;

  :hover {
    background-color: black;
    color: white;
    font-weight: bold;
    border-color: black;
  }
`;
