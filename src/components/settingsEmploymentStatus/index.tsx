import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsEmploymentStatus = ({
  handleRoleChange,
}: SaveSettings) => {

  return (
    <>
      <div>
        <TextField
          id="role"
          label="Role"
          variant="outlined"
          onChange={handleRoleChange}
        />
      </div>
    </>
  );
};
