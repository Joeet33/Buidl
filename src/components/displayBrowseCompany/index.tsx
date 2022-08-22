import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

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
    <ul>
      {applicationArr?.map((e: any, i: any) => {
        return (
          <>
            {e.attributes.applicationCompany === undefined ? null : (
              <li>{e.attributes.applicationCompany}</li>
            )}
          </>
        );
      })}
    </ul>
  );
};
