import { useState } from "react";
import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";

export const SettingsUsername = (edits: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div>
        <input
          name="NameChange"
          width="100%"
          placeholder={user?.attributes?.username}
          onChange={edits.handleUsernameChange}
        />
      </div>
    </>
  );
};
