import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { StyledButton } from "../walletTypeUser/index.styles";

interface Props {
    clickCompany:any;
}

export const TypeCompany = (props:Props) => {

  return (
    <StyledButton variant="outlined" onClick={props.clickCompany}>
      Company
    </StyledButton>
  );
};