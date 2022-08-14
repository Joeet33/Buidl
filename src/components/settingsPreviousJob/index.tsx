import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsPreviousJob = ({ handlePreviousChange }: SaveSettings) => {

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
