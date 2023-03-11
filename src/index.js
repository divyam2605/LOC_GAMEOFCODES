import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { theme } from "./utils/theme";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
import {ProSidebarProvider} from "react-pro-sidebar";


root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <ProSidebarProvider>
     
      <App />
    

     </ProSidebarProvider>
     </ThemeProvider>
   </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
