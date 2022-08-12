import { GitHubProps } from "../../interfaces/gitHubProps";
import { StyledButton } from "../settingsProfileForm/index.muistyles";
import { LoginContainer } from "./index.styles";

export const GitHubNotLoggedIn = ({ loginChange }: GitHubProps) => {
  return (
    <LoginContainer>
      <div>Add your Github to show off!</div>
      <StyledButton variant="contained" onClick={loginChange}>Github</StyledButton>
    </LoginContainer>
  );
};
