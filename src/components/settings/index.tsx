import React, { useState } from "react";
import { useMoralis } from "react-moralis";

export const Settings = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized && Moralis.User.current();

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (bio) {
      myDetails?.set("bio", bio);
    }

    if (username) {
      myDetails?.set("username", username);
    }

    await myDetails?.save();
    window.location.reload();
  };

  return (
    <>
      <div className="settingsPage">
        <input
          name="NameChange"
          width="100%"
          placeholder={user && user?.attributes?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          name="bioChange"
          width="100%"
          placeholder={user && user?.attributes?.bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>
      </div>
    </>
  );
};
