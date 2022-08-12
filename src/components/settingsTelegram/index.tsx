import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsTelegram = ({ handleTelegramChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Telegram"
          variant="outlined"
          onChange={handleTelegramChange}
        />
      </div>
    </>
  );
};
