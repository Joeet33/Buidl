import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
  StyledButton,
  StyledCard,
  StyledList,
} from "../displayBrowseCompany/index.styles";
import { StylePfp } from "../displayPfp/index.styles";

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
                  {e?.attributes.pfp ? (
                    <StylePfp src={e?.attributes?.pfp}></StylePfp>
                  ) : (
                    <StylePfp
                      src={
                        "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
                      }
                    ></StylePfp>
                  )}
                  <FlexBox3>
                    <StyledButton variant="contained">See More</StyledButton>
                  </FlexBox3>
                </FlexBox1>
                <FlexBox2>
                  <FlexBox4>
                    <div>{e?.attributes?.username}</div>
                  </FlexBox4>
                  <StyledList>{e?.attributes?.applicationCompany}</StyledList>
                </FlexBox2>
              </StyledCard>
            )}
          </>
        );
      })}
    </>
  );
};
