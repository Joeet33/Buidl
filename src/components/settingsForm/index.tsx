import { DisplayPfp } from "../displayPfp";
import { SettingsBio } from "../settingsBio";
import { GitHubSaveUser } from "../settingsGitHubSaveUser";
import { SettingsUsername } from "../settingsUsername";
import { FormWrapper } from "./index.styles";

interface Props {
  close: React.MouseEventHandler<HTMLButtonElement>;
}

export const SettingsForm = (props: Props) => {
  return (
    <FormWrapper>
      <button onClick={props.close}>X</button>
      <div>
        <DisplayPfp />
        <div>change image on click, load settingspfp</div>
      </div>
      {/* make sure everything is saved to the backend at once */}
      <SettingsUsername />
      <SettingsBio />
      <GitHubSaveUser />
    </FormWrapper>
  );
};
