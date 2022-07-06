import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./globalStyles";
import { MoralisProvider } from "react-moralis";

const APP_ID: string = process.env.REACT_APP_APPLICATION_ID!;
const SERVER_URL: string = process.env.REACT_APP_SERVER_URL!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </MoralisProvider>
);
