import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";

export const ApplicationUser = () => {
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
      <Nav />
      <BodyContainer>
        <ul>
          {applicationArr?.map((e: any, i: any) => {
            return (
              <>
                {e.attributes.ethAddress === undefined ? null : (
                  <li>{e.attributes.ethAddress}</li>
                )}{" "}
              </>
            );
          })}
        </ul>
      </BodyContainer>
    </>
  );
};
