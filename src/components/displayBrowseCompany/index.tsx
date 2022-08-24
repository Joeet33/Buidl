import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  DisplayStatusContainer,
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
  FlexBox5,
  FlexBox6,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledCard,
  StyledList,
} from "../displayBrowseCompany/index.styles";
import { StylePfp } from "../displayPfp/index.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  DisplayActivityContainer,
  DisplayRepoContainer,
} from "../../pages/profileUser/index.styles";
import { StyledHeader } from "../settingsProfileForm/index.styles";
import { NameContainer } from "../displayGitHubName/index.styles";
import { RepositoriesList } from "../reposGitHubHorizontalScroll";
import GitHubCalendar from "react-github-calendar";
import {
  DisplayContactsContainer,
  StyledContacts,
} from "../displayContactForm/index.styles";

export const DisplayBrowseCompany = () => {
  const { isInitialized, Moralis } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const [applicationArr, setApplicationArr] = useState<any>();

  useEffect(() => {
    const asyncFunc = async () => {
      const results = await Moralis.Cloud.run("_User");
      console.log(results);
      setApplicationArr(results);
    };
    asyncFunc();
  }, []);

  return (
    <>
      {applicationArr?.map((e: any, i: any) => {
        return (
          <>
            {e?.attributes?.applicationCompany === undefined ? null : (
              <StyledCard>
                <FlexBox1>
                  <FlexBox2>
                    {e?.attributes.pfp ? (
                      <StylePfp src={e?.attributes?.pfp}></StylePfp>
                    ) : (
                      <StylePfp
                        src={
                          "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
                        }
                      ></StylePfp>
                    )}
                  </FlexBox2>

                  <FlexBox3>
                    <FlexBox4>
                      <div>{e?.attributes?.username}</div>
                    </FlexBox4>
                    <StyledList>{e?.attributes?.applicationCompany}</StyledList>
                  </FlexBox3>
                </FlexBox1>

                <StyledAccordion>
                  <StyledAccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    Show More
                  </StyledAccordionSummary>
                  <StyledAccordionDetails>
                    <DisplayStatusContainer>
                      <StyledHeader>Status</StyledHeader>
                      <FlexBox5>
                        {e?.attributes.employmentRole ? (
                          <div>
                            {" "}
                            Employment Role: {e?.attributes?.employmentRole}
                          </div>
                        ) : (
                          <div>Employment Role</div>
                        )}
                        {e?.attributes.currentJob ? (
                          <div>
                            Current Company: {e?.attributes?.currentJob}
                          </div>
                        ) : (
                          <div>Current Company</div>
                        )}
                        {e?.attributes.previousJob ? (
                          <div>
                            Previous Company: {e?.attributes?.previousJob}
                          </div>
                        ) : (
                          <div>Previous Company</div>
                        )}
                      </FlexBox5>
                    </DisplayStatusContainer>

                    <DisplayContactsContainer>
                      <StyledHeader>Contacts</StyledHeader>

                      <FlexBox6>
                        {e?.attributes.twitter ? (
                          <StyledContacts>
                            <img
                              src={
                                "https://assets.stickpng.com/thumbs/58e9196deb97430e819064f6.png"
                              }
                            ></img>
                            <div>Twitter: {e && e?.attributes?.twitter}</div>
                          </StyledContacts>
                        ) : (
                          <StyledContacts>
                            <img
                              src={
                                "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                              }
                            ></img>
                            <div>Twitter</div>
                          </StyledContacts>
                        )}

                        {e?.attributes.telegram ? (
                          <StyledContacts>
                            <img
                              src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png"
                              }
                            ></img>
                            <div>Telegram: {e && e?.attributes?.telegram}</div>
                          </StyledContacts>
                        ) : (
                          <StyledContacts>
                            <img
                              src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png"
                              }
                            ></img>
                            <div>Telegram</div>
                          </StyledContacts>
                        )}

                        {e?.attributes.discord ? (
                          <StyledContacts>
                            <img
                              src={
                                "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"
                              }
                            ></img>
                            <div>Discord: {e && e?.attributes?.discord}</div>
                          </StyledContacts>
                        ) : (
                          <StyledContacts>
                            <img
                              src={
                                "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"
                              }
                            ></img>
                            <div>Discord</div>
                          </StyledContacts>
                        )}
                      </FlexBox6>
                    </DisplayContactsContainer>

                    <DisplayRepoContainer>
                      <StyledHeader>Github Repos</StyledHeader>
                      {e?.attributes.github && (
                        <NameContainer>
                          Name: {e.attributes.github.login}
                        </NameContainer>
                      )}
                      {e?.attributes.github && (
                        <RepositoriesList
                          repositoriesUrl={e.attributes.github.repos_url}
                        />
                      )}
                    </DisplayRepoContainer>

                    <DisplayActivityContainer>
                      <StyledHeader>Github Activity</StyledHeader>
                      <>
                        {e?.attributes.github && (
                          <GitHubCalendar
                            username={e?.attributes?.github?.login}
                            style={{ margin: "auto" }}
                          />
                        )}
                      </>
                    </DisplayActivityContainer>
                  </StyledAccordionDetails>
                </StyledAccordion>
              </StyledCard>
            )}
          </>
        );
      })}
    </>
  );
};
