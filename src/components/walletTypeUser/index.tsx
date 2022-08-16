import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { StyledButton } from "./index.styles";

interface Props{
  clickUser:any;
}

export const TypeUser = (props:Props) => {

  return (
    <StyledButton variant="outlined" onClick={props.clickUser}>
      User
    </StyledButton>
  );
};
