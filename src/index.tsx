import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import sfproTtf from "./assets/fonts/SF-Pro.ttf";


const sfpro: any = {
  fontFamily: "SF-Pro",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Sf-Pro'),
    local('Sf-Pro-Text'),
    url(${sfproTtf}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};


navigator?.serviceWorker?.ready.then(registration => {
  registration.unregister();
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EF7925",
    },
    secondary: {
      main: "#ff0000",
      dark: "#DADCE2"
    },
    text: {
      primary: "#001D2E",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Sf-Pro, Arial",
    h1: {
      textTransform: "capitalize",
      fontSize: "1.25rem",
      letterSpacing: "-1px",
      color: "#333333",
      fontWeight: 600,
    },
    h2: {
      textTransform: "capitalize",
      fontSize: "1.25rem",
      letterSpacing: "-1px",
      color: "#333333",
      fontWeight: 600,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [sfpro],
        body: {
          backgroundColor: "#FFFFFF",
          overflowX: "hidden",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
