import { useState, useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { ChainSelect } from "../../interfaces/chainSelect";
import { StyledButton } from "../settingsProfileForm/index.muistyles";
import { PfpSelection, PfpContainer } from "./index.style";

export const SettingsPfp = () => {
  const { Moralis, isAuthenticated, isInitialized } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [pfps, setPfps] = useState<string[]>();
  const [selectedPFP, setSelectedPFP] = useState<string>();
  const user = isInitialized ? Moralis.User.current() : undefined;

  const resolveLink = (url: string) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };

  useEffect(() => {
    if (user?.attributes?.ethAddress) {
      const fetchNFTs = async () => {
        const options: ChainSelect = {
          chain: "mumbai",
          address: user?.attributes?.ethAddress,
        };
        const ropstenNFTs = await Web3Api.account.getNFTs(options);

        if (!ropstenNFTs.result) return;
        const images = ropstenNFTs.result.map((e) =>
          resolveLink(JSON.parse(e.metadata!)?.image)
        );
        setPfps(images);
      };
      try {
        fetchNFTs();
      } catch (err) {
        console.log(err);
      }
    }
    console.log("test");
  }, [isAuthenticated, user?.attributes?.ethAddress]);

  const savePfpEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (selectedPFP) {
      myDetails?.set("pfp", selectedPFP);
    }

    await myDetails?.save();
    window.location.reload();
  };

  const selectPfp = pfps?.map((e: string, i: number) => {
    return (
      <PfpSelection
        key={i}
        active={selectedPFP && selectedPFP === e}
        src={e}
        onClick={() => {
          setSelectedPFP(e);
          console.log("clicked");
        }}
      />
    );
  });

  return (
    <>
      <PfpContainer>{selectPfp}</PfpContainer>

      <StyledButton variant="contained" onClick={() => savePfpEdits()}>
        Save
      </StyledButton>
    </>
  );
};
