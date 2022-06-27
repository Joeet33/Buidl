import { useContext } from "react";
import { Web3Context } from "../../context/web3Context";
import { ConnectContainer } from "./index.style";

export const Connect = () => {
  const { connectWallet }: any = useContext(Web3Context);

  return (
    <ConnectContainer>
      <h1>Buidl</h1>
      <button onClick={connectWallet}>Signup</button>
    </ConnectContainer>
  );
};
