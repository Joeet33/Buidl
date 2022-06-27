import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./globalStyles";
import { Web3Provider } from "./context/web3Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Web3Provider>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </Web3Provider>
);
