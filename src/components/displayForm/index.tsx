import { useState } from "react";
import { useMoralis } from "react-moralis";
import { FormChange } from "../../interfaces/formChange";
import { DisplayPfp } from "../displayPfp";
import { SettingsBio } from "../settingsBio";
import { SettingsCurrentJob } from "../settingsCurrentJob";
import { SettingsEmploymentStatus } from "../settingsEmploymentStatus";
import { GitHubSaveUser } from "../settingsGitHubSaveUser";
import { SettingsPreviousJob } from "../settingsPreviousJob";
import { SettingsUsername } from "../settingsUsername";
import { FormWrapper } from "./index.styles";

export const DisplayForm = (props: FormChange) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [currentJob, setcurrentJob] = useState("");
  const [previousJob, setpreviousJob] = useState("");
  const [employmentStatus, setemploymentStatus] = useState("");
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const handleCurrentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcurrentJob(e.target.value);
  };
  const handlePreviousChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpreviousJob(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemploymentStatus(e.target.value);
  };

  const edits = {
    handleUsernameChange,
    handleBioChange,
    handleCurrentChange,
    handlePreviousChange,
    handleStatusChange,
  };

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
    if (currentJob) {
      myDetails?.set("currentJob", currentJob);
    }
    if (previousJob) {
      myDetails?.set("previousJob", previousJob);
    }
    if (employmentStatus) {
      myDetails?.set("employmentStatus", employmentStatus);
    }
    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <FormWrapper>
      <button onClick={props.formChange}>X</button>
      <div>
        <DisplayPfp />
        <div>change image on click, load settingspfp</div>
      </div>
      <SettingsUsername {...edits} />
      <SettingsBio {...edits} />
      <SettingsEmploymentStatus {...edits} />
      <SettingsPreviousJob {...edits} />
      <SettingsCurrentJob {...edits} />
      <button onClick={saveEdits}>SaveTest</button>
    </FormWrapper>
  );
};
