import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";
import TextField from "@mui/material/TextField";

export const SettingsEmploymentStatus = ({
  handleRoleChange,
}: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Role"
          variant="outlined"
          onChange={handleRoleChange}
        />
      </div>
    </>
  );
};
