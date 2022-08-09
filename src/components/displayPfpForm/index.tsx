import { PfpChange } from "../../interfaces/pfpChange";
import { SettingsPfp } from "../settingsPfp";
import { FormWrapper } from "./index.styles";

export const PfpForm = (pfpChange: PfpChange) => {
  return (
    <>
      <FormWrapper>
        <button onClick={pfpChange.pfpChange}>X</button>
        <SettingsPfp />
      </FormWrapper>
    </>
  );
};
