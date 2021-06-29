import React from "react";
import MainProvider from "./main/state";

export const GlobalContextProvider = ({ children }: any) => {
  return (
    <MainProvider>
      {children}
    </MainProvider>
  );
};
