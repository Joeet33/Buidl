import { useState, useRef, useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { PfpOptions, PfpOption, PfpOptionSelected } from "./index.style";

export const PfpSelect = () => {
  const { Moralis, isAuthenticated, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [pfps, setPfps] = useState<string[]>();
  const [selectedPFP, setSelectedPFP] = useState<string>();

  const resolveLink = (url: string) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };

  interface OptionsProps {
    chain:
      | "eth"
      | "0x1"
      | "ropsten"
      | "0x3"
      | "rinkeby"
      | "0x4"
      | "goerli"
      | "0x5"
      | "kovan"
      | "0x2a"
      | "polygon"
      | "0x89"
      | "mumbai"
      | "0x13881"
      | "bsc"
      | "0x38"
      | "bsc testnet"
      | "0x61"
      | "avalanche"
      | "0xa86a"
      | "avalanche testnet"
      | "0xa869"
      | "fantom"
      | "0xfa"
      | undefined;
    address: string;
  }

  useEffect(() => {
    if (account) {
      const fetchNFTs = async () => {
        const options: OptionsProps = {
          chain: "mumbai",
          address: account,
        };

        const ropstenNFTs = await Web3Api.account.getNFTs(options);
        if (!ropstenNFTs.result) return;
        const images = ropstenNFTs.result.map((e) =>
          resolveLink(JSON.parse(e.metadata!)?.image)
        );
        setPfps(images);
      };

      fetchNFTs();
    }
  }, [isAuthenticated, account]);

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

const selectPfp = pfps?.map((e: string, i:number) => {
    return (
        <PfpOption
        key={i}
          active={selectedPFP && selectedPFP === e}
          src={e}
          onClick={() => {
            setSelectedPFP(e);
            console.log("clicked");
          }}
        />
    );
  })

  return (
    <>
      <div className="pageIdentify">Pfp</div>

      <div className="pfp">
        Profile Image (Your NFTs)
        <PfpOptions>
          {selectPfp}
        </PfpOptions>
      </div>

      <button className="save" onClick={() => savePfpEdits()}>
        Save 2
      </button>
    </>
  );
};
