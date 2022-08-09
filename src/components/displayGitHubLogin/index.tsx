import { useState } from "react";
import { LoginChange } from "../../interfaces/loginChange";
import { GitHubForm } from "../displayGitHubForm";
import { LoginContainer } from "./index.styles";

export const GitHubLogin = (props: LoginChange) => {
  return (
    <LoginContainer>
      <div>Add your Github to show off!</div>
      <button onClick={props.loginChange}>Github</button>
    </LoginContainer>
  );
};
