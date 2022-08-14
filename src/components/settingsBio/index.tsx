import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsBio = ({ handleBioChange }: SaveSettings) => {

  return (
    <>
      <div className="settingsPage">
        <TextField
          id="bio"
          label="Bio"
          variant="outlined"
          onChange={handleBioChange}
        />
      </div>
    </>
  );
};
