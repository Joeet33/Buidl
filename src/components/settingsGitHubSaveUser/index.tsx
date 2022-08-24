import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { IGitHubUser } from "../../interfaces/IGitHubUser";
import { useMoralis } from "react-moralis";
import {
  FlexBox1,
  FormContainer,
  GitHubFormContainer,
  StyledGitHub,
} from "./index.styles";
import { StyledButton } from "../settingsProfileForm/index.muistyles";
import TextField from "@mui/material/TextField";

export const SettingsGitHubUser = () => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [foundUser, setFoundUser] = useState<IGitHubUser>();
  const { Moralis, isInitialized } = useMoralis();
  const [isLoading, setIsLoading] = useState(false);

  const performSearchRequest = async () => {
    try {
      const response = await axios.get<IGitHubUser>(
        `https://api.github.com/users/${userSearch}`
      );
      setFoundUser(response.data);
      setIsLoading(true)
    } catch (error) {
      console.log(error);
    }
  };

  const searchForUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performSearchRequest();
  };

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (foundUser) {
      myDetails?.set("github", foundUser);
      console.log("details saved");
    }

    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  useEffect(() => {
    if (isLoading) {
      saveEdits();
    }
  }, [searchForUser, isInitialized]);

  return (
    <GitHubFormContainer>
      <FlexBox1>
        <h2>Search for a user</h2>
        <StyledGitHub
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
        ></StyledGitHub>
      </FlexBox1>
      <FormContainer className="search-user" onSubmit={searchForUser}>
        <TextField
          id="Github_search"
          label="Name"
          variant="outlined"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <div>
          <StyledButton
            type="submit"
            variant="contained"
          >
            Search
          </StyledButton>
        </div>
      </FormContainer>
    </GitHubFormContainer>
  );
};
