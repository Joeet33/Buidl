import { useContext } from "react";
import { Connect } from "../../components/connectForm";
import { Web3Context } from "../../context/web3Context";
import { SignupContainer } from "./index.style";

export const Signup = () => {
  const { currentAccount }: any = useContext(Web3Context);

  return (
    <SignupContainer>
      <Connect />
      <div>{currentAccount}</div>
    </SignupContainer>
  );
};
