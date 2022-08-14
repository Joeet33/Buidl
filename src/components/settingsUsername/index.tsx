import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsUsername = ({ handleUsernameChange }: SaveSettings) => {

  return (
    <>
      <div>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          onChange={handleUsernameChange}
        />
      </div>
    </>
  );
};
