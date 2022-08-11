export interface SaveSettings {
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreviousChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatusChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
