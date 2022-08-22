import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { BodyContainer } from "../../components/bodyContainer/bodyContainer";
import { Nav } from "../../components/nav";

export const BrowseCompany = () => {
  const { isInitialized, Moralis } = useMoralis();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const [applicationArr, setApplicationArr] = useState<any>();

  useEffect(() => {
    async function getApplications() {
      try {
        const Application = Moralis.Object.extend("_User");
        const query = new Moralis.Query(Application);

        const results = await query.find();

        setApplicationArr(results as any);
        console.log(results);
      } catch (err) {
        console.log(err);
      }
    }
    getApplications();
  }, [user?.attributes]);

  return (
    <>
      <Nav />
      <BodyContainer>
        <ul>
          <li>
            {applicationArr?.map((e: any) => {
              return <div>{e.attributes.ethAddress}</div>;
            })}
          </li>
        </ul>
      </BodyContainer>
    </>
  );
};
