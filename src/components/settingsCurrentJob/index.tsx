import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsCurrentJob = ({ handleCurrentChange }: SaveSettings) => {

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
