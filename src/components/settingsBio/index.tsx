import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";

export const SettingsBio = (edits: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div className="settingsPage">
        <input
          name="bioChange"
          width="100%"
          placeholder={user?.attributes?.bio}
          onChange={edits.handleBioChange}
        />
      </div>
    </>
  );
};
