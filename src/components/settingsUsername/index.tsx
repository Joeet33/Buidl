import { useState } from "react";
import { useMoralis } from "react-moralis";

export const SettingsUsername = () => {
  const [username, setUsername] = useState("");
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (username) {
      myDetails?.set("username", username);
    }
    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <>
      <div>
        <input
          name="NameChange"
          width="100%"
          placeholder={user?.attributes?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={saveEdits}>Save</button>
      </div>
    </>
  );
};
