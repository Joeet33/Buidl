import { useState } from "react";
import { useMoralis } from "react-moralis";
import { PfpForm } from "../pfpForm";
import { DisplayForm } from "../modalPopup";
import { StylePfp } from "../displayPfp/index.styles";
import { StyleSettingsPfp } from "./index.styles";

export const SettingsEditPfp = () => {
  const { Moralis, isInitialized } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;
  const [showPfpSelect, setShowPfpSelect] = useState(false);

  const handlePfpChange = () => {
    setShowPfpSelect(!showPfpSelect);
  };

  return (
    <>
      {user?.attributes?.pfp ? (
        <StyleSettingsPfp
          onClick={handlePfpChange}
          src={user?.attributes?.pfp}
        ></StyleSettingsPfp>
      ) : (
        <StyleSettingsPfp
          src={
            "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
          }
          onClick={handlePfpChange}
        ></StyleSettingsPfp>
      )}

      {showPfpSelect && (
        <DisplayForm onClickClose={handlePfpChange}>
          <PfpForm pfpChange={handlePfpChange} />
        </DisplayForm>
      )}
    </>
  );
};
