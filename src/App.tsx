import React from "react";
import { AppWidth, GlobalStyle } from "./AppStyle";
import { Landing } from "./components/Landing/Landing";

export const App = () => {
  return (
    <>
      <AppWidth>
        <GlobalStyle />
        <Landing />
        <div style={{ background: "blue", height: "100px" }}></div>
      </AppWidth>
    </>
  );
};
