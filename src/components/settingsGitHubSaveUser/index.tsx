import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { IGitHubUser } from "../../interfaces/IGitHubUser";
import { useMoralis } from "react-moralis";
import { FlexBox1, GitHubFormContainer, StyledGitHub } from "./index.styles";

export const SettingsGitHubUser = () => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [foundUser, setFoundUser] = useState<IGitHubUser>();
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const performSearchRequest = async () => {
    try {
      const response = await axios.get<IGitHubUser>(
        `https://api.github.com/users/${userSearch}`
      );
      setFoundUser(response.data);
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
  };

  useEffect(() => {
    saveEdits();
  }, [searchForUser, isInitialized]);

  return (
    <GitHubFormContainer>
      <FlexBox1>
        <h2>Search for a user</h2>
        <StyledGitHub
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
        ></StyledGitHub>
      </FlexBox1>
      <form className="search-user" onSubmit={searchForUser}>
        <input
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder="Enter a username..."
        />
        <button>Search</button>
      </form>
    </GitHubFormContainer>
  );
};
