import { render, screen } from "@testing-library/react";
import { Children } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../styles/renderTheme";
import Home from ".";

test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", {
    name: "Hello",
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  // expect(headingContainer).toHaveStyleRule("background ", "red")
});
