import { DisplayPfp } from "../displayPfp";
import { SettingsBio } from "../settingsBio";
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
        <img src=""></img>
      </div>

      <SettingsUsername />
      <SettingsBio />
    </FormWrapper>
  );
};
