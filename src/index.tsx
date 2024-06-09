import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import 'react-toastify/dist/ReactToastify.css'

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <App />
        </CssVarsProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
