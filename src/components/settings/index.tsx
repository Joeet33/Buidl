import { useState, useRef, useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const Settings = () => {
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();
  const { Moralis, isAuthenticated, account } = useMoralis();

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (bio) {
      myDetails!.set("bio", bio);
    }

    if (username) {
      myDetails!.set("username", username);
    }

    await myDetails!.save();
    window.location.reload();
  };

  return (
    <>
      <div className="settingsPage">
        <input
          name="NameChange"
          width="100%"
          onChange={(e: any) => setUsername(e.target.value)}
        />

        <input
          name="bioChange"
          width="100%"
          onChange={(e: any) => setBio(e.target.value)}
        />

        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>
      </div>
    </>
  );
};
