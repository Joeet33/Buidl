import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsTwitter = ({ handleTwitterChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

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
