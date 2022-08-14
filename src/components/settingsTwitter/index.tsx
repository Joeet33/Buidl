import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsTwitter = ({ handleTwitterChange }: SaveSettings) => {

  return (
    <>
      <div>
        <TextField
          id="twitter"
          label="Twitter"
          variant="outlined"
          onChange={handleTwitterChange}
        />
      </div>
    </>
  );
};
