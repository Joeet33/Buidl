import { useState } from "react";
import { useMoralis } from "react-moralis";
import { SettingsBio } from "../settingsBio";
import { SettingsCurrentJob } from "../settingsCurrentJob";
import { SettingsEditPfp } from "../settingsEditPfp";
import { SettingsEmploymentStatus } from "../settingsEmploymentStatus";
import { SettingsPreviousJob } from "../settingsPreviousJob";
import { SettingsUsername } from "../settingsUsername";
import { FormWrapper } from "./index.styles";

export const FormCard = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [currentJob, setcurrentJob] = useState("");
  const [previousJob, setpreviousJob] = useState("");
  const [employmentStatus, setemploymentStatus] = useState("");
  const { Moralis } = useMoralis();


  const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const handleCurrentChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setcurrentJob(e.target.value);
  };
  const handlePreviousChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setpreviousJob(e.target.value);
  };
  const handleStatusChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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
    
      <SettingsEditPfp />
    
      <SettingsUsername {...edits} />
      <SettingsBio {...edits} />
      <SettingsEmploymentStatus {...edits} />
      <SettingsPreviousJob {...edits} />
      <SettingsCurrentJob {...edits} />
      <button onClick={saveEdits}>SaveTest</button>
    </FormWrapper>
  );
};
