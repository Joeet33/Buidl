import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./globalStyles";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

const APP_ID: string = process.env.REACT_APP_APPLICATION_ID!;
const SERVER_URL: string = process.env.REACT_APP_SERVER_URL!;
const MASTER_KEY: string = process.env.REACT_APP_MASTER_KEY!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL} >
    <BrowserRouter>
      <React.StrictMode>
        <App />
        <GlobalStyle />
      </React.StrictMode>
    </BrowserRouter>
  </MoralisProvider>
);
