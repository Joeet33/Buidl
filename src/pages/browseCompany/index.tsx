import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { DisplayBrowseUser } from "../../components/displayBrowseUser";
import { Nav } from "../../components/nav";

export const BrowseCompany = () => {
  return (
    <>
      <Nav />
      <BodyContainer>
        <DisplayBrowseUser />
      </BodyContainer>
    </>
  );
};
