import { SettingsGitHubUser } from "../settingsGitHubSaveUser";
import { GitHubFormContainer } from "./index.styles";

export const GitHubForm = () => {
  return (
    <GitHubFormContainer>
      <SettingsGitHubUser />
    </GitHubFormContainer>
  );
};
