import { useState } from "react";
import { useMoralis } from "react-moralis";
import { SettingsBio } from "../settingsBio";
import { SettingsCurrentJob } from "../settingsCurrentJob";
import { SettingsDiscord } from "../settingsDiscord";
import { SettingsEditPfp } from "../settingsEditPfp";
import { SettingsEmploymentStatus } from "../settingsEmploymentStatus";
import { SettingsPreviousJob } from "../settingsPreviousJob";
import { SettingsTelegram } from "../settingsTelegram";
import { SettingsTwitter } from "../settingsTwitter";
import { SettingsUsername } from "../settingsUsername";
import { StyledButton, WalletTypeCompany, WalletTypeUser } from "./index.muistyles";
import {
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
  FlexBox5,
  FlexBox6,
  FlexBox7,
  ProfileContainer,
  StyledHeader,
} from "./index.styles";

export const FormCard = () => {
  const { Moralis } = useMoralis();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [currentJob, setcurrentJob] = useState("");
  const [previousJob, setpreviousJob] = useState("");
  const [employmentRole, setemploymentRole] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");
  const [flagUser, setFlagUser] = useState(true);
  const [flagCompany, setFlagCompany] = useState(true);

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
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemploymentRole(e.target.value);
  };
  const handleTwitterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
  };
  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(e.target.value);
  };
  const handleDiscordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscord(e.target.value);
  };

  const edits = {
    handleUsernameChange,
    handleBioChange,
    handleCurrentChange,
    handlePreviousChange,
    handleRoleChange,
    handleTwitterChange,
    handleTelegramChange,
    handleDiscordChange,
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
    if (employmentRole) {
      myDetails?.set("employmentRole", employmentRole);
    }
    if (twitter) {
      myDetails?.set("twitter", twitter);
    }
    if (telegram) {
      myDetails?.set("telegram", telegram);
    }
    if (discord) {
      myDetails?.set("discord", discord);
    }
    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  const handleCompanyClick = () => {
    saveEdit("company");
    setFlagCompany(!flagCompany);
    setFlagUser(true)
  };

  const handleUserClick = () => {
    saveEdit("users");
    setFlagUser(!flagUser);
    setFlagCompany(true)
  };

  const saveEdit = async (walletType: string) => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    myDetails?.set("walletType", walletType);

    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProfileContainer>
      <StyledHeader>Edit Profile</StyledHeader>
      <FlexBox1>
        <SettingsEditPfp />
        <WalletTypeUser active={flagUser} variant="outlined" onClick={handleUserClick}>User</WalletTypeUser>
        <WalletTypeCompany active={flagCompany} variant="outlined" onClick={handleCompanyClick}>Company</WalletTypeCompany>
      </FlexBox1>

      <FlexBox2>
        <FlexBox3>
          <SettingsUsername {...edits} />
          <SettingsBio {...edits} />
        </FlexBox3>
        <FlexBox4>
          <SettingsEmploymentStatus {...edits} />
          <SettingsPreviousJob {...edits} />
        </FlexBox4>
        <FlexBox5>
          <SettingsCurrentJob {...edits} />
          <SettingsTwitter {...edits} />
        </FlexBox5>
        <FlexBox6>
          <SettingsTelegram {...edits} />
          <SettingsDiscord {...edits} />
        </FlexBox6>
      </FlexBox2>
      <FlexBox7>
        <StyledButton variant="contained" onClick={saveEdits}>
          Save
        </StyledButton>
      </FlexBox7>
    </ProfileContainer>
  );
};
