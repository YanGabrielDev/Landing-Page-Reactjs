import { TextComponent } from ".";
import { screen } from "@testing-library/react";
// import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
describe("<TextComponent/>", () => {
  it("should render", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
