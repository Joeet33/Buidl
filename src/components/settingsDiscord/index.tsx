import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsDiscord = ({ handleDiscordChange }: SaveSettings) => {

  return (
    <>
      <div>
        <TextField
          id="discord"
          label="Discord"
          variant="outlined"
          onChange={handleDiscordChange}
        />
      </div>
    </>
  );
};
