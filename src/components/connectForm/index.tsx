import { ConnectContainer } from "./index.style";
import { useMoralis } from "react-moralis";

export const Connect = () => {
  const { authenticate }: any = useMoralis();
  return (
    <ConnectContainer>
      <h1>Buidl</h1>
      <button type="submit" onClick={authenticate}>
        Signup
      </button>
    </ConnectContainer>
  );
};
