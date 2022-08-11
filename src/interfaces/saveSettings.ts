export interface SaveSettings {
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreviousChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTwitterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTelegramChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDiscordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
