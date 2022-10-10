import React from "react";
import { theme } from "./theme";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
