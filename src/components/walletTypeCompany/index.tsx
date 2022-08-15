import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { StyledButton } from "./index.styles";

export const TypeCompany = () => {
  const { isAuthenticated, Moralis } = useMoralis();
  const [typeCompany, setTypeCompany] = useState("");

  const handleCompanyClick = () => {
    setTypeCompany("Company");
  };

  const saveCompanyEdit = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (typeCompany) {
      myDetails?.set("Wallet_Type", typeCompany);
    }
    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  useEffect(() => {
    if (typeCompany && isAuthenticated) {
      saveCompanyEdit();
    }
  }, [typeCompany, isAuthenticated]);

  return (
    <StyledButton variant="outlined" onClick={handleCompanyClick}>
      Company
    </StyledButton>
  );
};
