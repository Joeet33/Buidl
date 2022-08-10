import { useState } from "react";
import { useMoralis } from "react-moralis";
import { PfpChange } from "../../interfaces/pfpChange";
import { PfpForm } from "../pfpForm";
import { DisplayForm } from "../modalPopup";
import { PfpStyle } from "../settingsPfp/index.style";

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
        <PfpStyle
          onClick={handlePfpChange}
          src={user?.attributes?.pfp}
        ></PfpStyle>
      )}

      {showPfpSelect && (
        <DisplayForm onClickClose={handlePfpChange}>
          <PfpForm pfpChange={handlePfpChange} />
        </DisplayForm>
      )}
    </>
  );
};
