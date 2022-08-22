// should really create two forms for different class databases

import { TextField } from "@mui/material";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { StyledButton } from "../settingsProfileForm/index.muistyles";

export const ApplicationFormUser = () => {
  const [application, setApplication] = useState();
  const { isInitialized, Moralis } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const handleChange = (e: any) => {
    setApplication(e.target.value);
  };

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (application) {
      myDetails?.set("applicationUser", application);
    }

    try {
      await myDetails?.save();
      console.log("details saved");
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <>
      <div>
        <TextField
          id="application"
          label={user?.attributes.applicationUser === undefined ? "application" : user.attributes.applicationUser}
          variant="outlined"
          onChange={handleChange}
        />

        <StyledButton type="submit" variant="contained" onClick={saveEdits}>
          Submit
        </StyledButton>
      </div>
    </>
  );
};
