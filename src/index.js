import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#1866a5",
      main: "#183fa5",
    },
    secondary: {
      main: '#c4c4c4'
    }
  },
  typography: {
    fontFamily: "Mullish",
  },
});

const customTheme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
