import { render, screen } from "@testing-library/react";
import { Children } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../styles/renderTheme";
import Home from ".";

describe("<home/>", () => {
  it("should render home", () => {
    renderTheme(<Home />);
  });
});
