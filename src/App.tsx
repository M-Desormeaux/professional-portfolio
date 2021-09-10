import React from "react";
import { GlobalStyle } from "./AppStyle";
import { Landing } from "./components/Landing/Landing";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Landing />
      <div style={{ background: "blue", height: "1000px" }}></div>
    </>
  );
};
