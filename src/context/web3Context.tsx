import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// creates context
export const Web3Context = React.createContext({});

const { ethereum }: any = window;

export const Web3Provider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnect = async () => {
    // if metamask is not installed, send alert to install metamask
    if (!ethereum) return alert("Please install MetaMask.");

    // request ethereum address
    const accounts = await ethereum.request({ method: "eth_accounts" });

    // if account is found setCurrentAccount to the address
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    }
  };

  const connectWallet = async () => {
    try {
      // if metamask is not installed, send alert to install metamask
      if (!ethereum) return alert("Please install MetaMask.");

      // request ethereum address
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        currentAccount,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
