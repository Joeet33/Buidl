import { LoginChange } from "../../interfaces/loginChange";
import { GitHubSaveUser } from "../settingsGitHubSaveUser";
import { Wrapper } from "./index.styles";

export const GitHubForm = (props: LoginChange) => {
  return (
    <Wrapper>
      <button onClick={props.loginChange}>X</button>
      <GitHubSaveUser />
    </Wrapper>
  );
};
