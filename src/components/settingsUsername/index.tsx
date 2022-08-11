import { useMoralis } from "react-moralis";
import { SaveSettings } from "../../interfaces/saveSettings";

export const SettingsUsername = ({ handleUsernameChange }: SaveSettings) => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  return (
    <>
      <div>
        <input
          name="NameChange"
          width="100%"
          placeholder={user?.attributes?.username}
          onChange={handleUsernameChange}
        />
      </div>
    </>
  );
};
