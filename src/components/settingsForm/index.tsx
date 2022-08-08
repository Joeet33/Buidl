import { useState } from "react";
import { useMoralis } from "react-moralis";
import { DisplayPfp } from "../displayPfp";
import { SettingsBio } from "../settingsBio";
import { GitHubSaveUser } from "../settingsGitHubSaveUser";
import { SettingsUsername } from "../settingsUsername";
import { FormWrapper } from "./index.styles";

interface Props {
  close: React.MouseEventHandler<HTMLButtonElement>;
}

export const SettingsForm = (props: Props) => {

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;


  const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleBioChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value)
  }


  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (username) {
      myDetails?.set("username", username);
    }

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

  const edits = {handleUsernameChange, handleBioChange}

  return (
    <FormWrapper>
      <button onClick={props.close}>X</button>
      <div>
        <DisplayPfp />
        <div>change image on click, load settingspfp</div>
      </div>
      <SettingsUsername {... edits}/>
      <SettingsBio {... edits}/>
      <button onClick={saveEdits}>SaveTest</button>
      <GitHubSaveUser />
    </FormWrapper>
  );
};
