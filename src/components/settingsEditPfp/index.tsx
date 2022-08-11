import { useState } from "react";
import { useMoralis } from "react-moralis";
import { PfpForm } from "../pfpForm";
import { DisplayForm } from "../modalPopup";
import { StylePfp } from "../displayPfp/index.styles";

export const SettingsEditPfp = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  const [showPfpSelect, setShowPfpSelect] = useState(false);

  const handlePfpChange = () => {
    setShowPfpSelect(!showPfpSelect);
  };

  return (
    <>
      {user && (
        <StylePfp
          onClick={handlePfpChange}
          src={user?.attributes?.pfp}
        ></StylePfp>
      )}

      {showPfpSelect && (
        <DisplayForm onClickClose={handlePfpChange}>
          <PfpForm pfpChange={handlePfpChange} />
        </DisplayForm>
      )}
    </>
  );
};
