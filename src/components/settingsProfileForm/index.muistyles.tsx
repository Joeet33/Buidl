import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)`
  color: white;
  background-color: black;

  :hover {
    background-color: white;
    color: black;
  }
`;

interface Props {
  active: any;
}

export const WalletTypeUser = styled(Button)<Props>`
  height: 75%;
  margin: right;

  background-color: ${(props) => (props.active ? "white" : "black")};
  color: ${(props) => (props.active ? "black" : "white")};
  border-color: black;

  :hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;

export const WalletTypeCompany = styled(Button)<Props>`
  height: 75%;
  margin: right;
  background-color: ${(props) => (props.active ? "white" : "black")};
  color: ${(props) => (props.active ? "black" : "white")};
  border-color: black;

  :hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;
