import { useState } from "react";
import { useMoralis } from "react-moralis";

export const SettingsBio = () => {
  const [bio, setBio] = useState("");
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (bio) {
      myDetails?.set("bio", bio);
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
      <div className="settingsPage">
        <input
          name="bioChange"
          width="100%"
          placeholder={user?.attributes?.bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button onClick={saveEdits}>Save</button>
      </div>
    </>
  );
};
