import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { LogoLink } from ".";
describe("<logoLink/>", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="olá mundo" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
