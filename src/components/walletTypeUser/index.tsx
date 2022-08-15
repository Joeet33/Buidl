import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { StyledButton } from "../walletTypeCompany/index.styles";

export const TypeUser = () => {
  const { isAuthenticated, Moralis } = useMoralis();
  const [typeUser, setTypeUser] = useState("");

  const handleUserClick = () => {
    setTypeUser("User");
  };

  const saveUserEdit = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (typeUser) {
      myDetails?.set("Wallet_Type", typeUser);
    }
    try {
      await myDetails?.save();
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  useEffect(() => {
    if (typeUser && isAuthenticated) {
      saveUserEdit();
    }
  }, [typeUser, isAuthenticated]);

  return (
    <StyledButton variant="outlined" onClick={handleUserClick}>
      User
    </StyledButton>
  );
};
