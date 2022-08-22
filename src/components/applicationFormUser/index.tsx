// should really create two forms for different class databases
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { DisplayPfp } from "../displayPfp";
import { StylePfp } from "../displayPfp/index.styles";
import { StyledButton } from "../settingsProfileForm/index.muistyles";
import {
  FlexBox1,
  FlexBox2,
  FlexBox3,
  StyledCard,
  StyledTextField,
  StyledTitle,
} from "../applicationFormCompany/index.muistyles";

export const ApplicationFormUser = () => {
  const [application, setApplication] = useState();
  const { isInitialized, Moralis } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const handleChange = (e: any) => {
    setApplication(e.target.value);
  };

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (application) {
      myDetails?.set("applicationUser", application);
    }

    try {
      await myDetails?.save();
      console.log("details saved");
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <>
      <StyledCard>
        <FlexBox1>
          {user?.attributes.pfp ? (
            <DisplayPfp />
          ) : (
            <StylePfp
              src={
                "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
              }
            ></StylePfp>
          )}
        </FlexBox1>

        <FlexBox2>
          <StyledTitle>Application Form</StyledTitle>
          <StyledTextField
            id="application"
            placeholder={
              user?.attributes.applicationUser === undefined
                ? "application"
                : user.attributes.applicationUser
            }
            variant="outlined"
            multiline
            rows={4}
            onChange={handleChange}
          />

          <FlexBox3>
            <StyledButton type="submit" variant="contained" onClick={saveEdits}>
              Submit
            </StyledButton>
          </FlexBox3>
        </FlexBox2>
      </StyledCard>
    </>
  );
};
