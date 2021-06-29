import React, { Suspense } from "react";
import "./App.css";

// Material UI Imports
import CssBaseline from "@material-ui/core/CssBaseline";

// Localization Modules
import "./i18n";

// Router Imports
import Routes from "./Routes";

import { GlobalContextProvider } from "./context/index";
// @ts-ignore

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <CssBaseline />
        <GlobalContextProvider>
          <Routes />
        </GlobalContextProvider>
      </div>
    </Suspense>
  );
}

export default App;
