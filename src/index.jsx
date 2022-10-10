import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import Home from "./templates/App";
import { GrobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Home />
    <GrobalStyles/>
    </ThemeProvider> 
  </React.StrictMode>
);



