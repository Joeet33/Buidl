import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsCurrentJob = ({ handleCurrentChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div>
        <TextField
          id="current_work"
          label="Current Work"
          variant="outlined"
          onChange={handleCurrentChange}
        />
      </div>
    </>
  );
};
