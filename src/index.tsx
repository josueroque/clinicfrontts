import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./index.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,

  document.querySelector("#root")
);
