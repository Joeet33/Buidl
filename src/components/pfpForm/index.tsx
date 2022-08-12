import { PfpChange } from "../../interfaces/pfpChange";
import { SettingsPfp } from "../settingsPfp";
import { PfpContainer } from "./index.styles";

export const PfpForm = (pfpChange: PfpChange) => {
  return (
    <>
      <PfpContainer>
        <div>Select a Profile Picture</div>
        <SettingsPfp />
      </PfpContainer>
    </>
  );
};
