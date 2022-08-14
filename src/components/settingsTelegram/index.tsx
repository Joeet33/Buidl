import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsTelegram = ({ handleTelegramChange }: SaveSettings) => {

  return (
    <>
      <div>
        <TextField
          id="telegram"
          label="Telegram"
          variant="outlined"
          onChange={handleTelegramChange}
        />
      </div>
    </>
  );
};
