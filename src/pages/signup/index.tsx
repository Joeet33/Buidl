import { Connect } from "../../components/connectForm";
import { SignupContainer } from "./index.style";
import { useMoralis } from "react-moralis";

export const Signup = () => {
  const { authError }: any = useMoralis();

  return (
    <SignupContainer>
      <Connect />
      <div>{authError && <div>error</div>}</div>
    </SignupContainer>
  );
};
