import { useState } from "react";
import { GitHubForm } from "../settingGitHubForm";
import { LoginContainer } from "./index.styles";

export const GitHubLogin = () => {
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setShowForm(!showForm);
  };

  return (
    <LoginContainer>
      <div>Add your Github to show off!</div>
      <button onClick={handleChange}>Github</button>
      {showForm && <GitHubForm />}
    </LoginContainer>
  );
};
