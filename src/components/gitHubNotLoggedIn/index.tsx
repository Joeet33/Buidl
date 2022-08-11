import { GitHubProps } from "../../interfaces/gitHubProps";
import { LoginContainer } from "./index.styles";

export const GitHubNotLoggedIn = ({ loginChange }: GitHubProps) => {
  return (
    <LoginContainer>
      <div>Add your Github to show off!</div>
      <button onClick={loginChange}>Github</button>
    </LoginContainer>
  );
};
