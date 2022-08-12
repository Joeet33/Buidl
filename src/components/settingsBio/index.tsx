import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsBio = ({ handleBioChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div className="settingsPage">
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          onChange={handleBioChange}
        />
      </div>
    </>
  );
};
