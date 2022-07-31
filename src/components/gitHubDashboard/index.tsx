import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { IGitHubUser } from "../../interfaces/IGitHubUser";
import { RepositoriesList } from "../gitHubRepos";
import { useMoralis } from "react-moralis";

export const Dashboard = () => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [foundUser, setFoundUser] = useState<IGitHubUser>();

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

  const { Moralis, isInitialized } = useMoralis();

  const user = isInitialized ? Moralis.User.current() : undefined;

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (foundUser) {
      myDetails?.set("github", foundUser.name);
      console.log("details saved");
    }

    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <>
      <h2>Search for a user</h2>
      <form className="search-user" onSubmit={searchForUser}>
        <input
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder="Enter a username..."
        />
        <button>Search</button>
      </form>
      <button onClick={saveEdits}>Search</button>

      {foundUser && (
        <div>
          <h3>{foundUser.login}</h3>
          <div className="user-details">
            <div>
              <p>
                <strong>Name: </strong>
                {foundUser.name}
              </p>
              <p>
                <strong>Company: </strong>
                {foundUser.company}
              </p>
              <p>
                <strong>Location: </strong>
                {foundUser.location}
              </p>
              <p>
                <strong>Followers: </strong>
                {foundUser.followers}
              </p>
            </div>
            <img src={foundUser.avatar_url} alt={foundUser.name} />
          </div>
          <br></br>
          <RepositoriesList repositoriesUrl={foundUser.repos_url} />
        </div>
      )}
    </>
  );
};
