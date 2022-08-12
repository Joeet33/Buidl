import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsPreviousJob = ({ handlePreviousChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div>
        <TextField
          id="previous_work"
          label="Previous Work"
          variant="outlined"
          onChange={handlePreviousChange}
        />
      </div>
    </>
  );
};
