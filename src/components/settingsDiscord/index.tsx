import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsDiscord = ({ handleDiscordChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

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
