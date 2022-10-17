import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { Menu } from ".";
import LinksMock from "../NavLink/mocks";
import { container } from "webpack";
import { theme } from "../../styles/theme";

const logoData = {
  text: "Logo",
  link: " #tagert",
};
describe("<Menu/>", () => {
  it("should render", () => {
    renderTheme(<Menu Links={LinksMock} LogoData={logoData} />);

    expect(
      screen.getByRole("navigation", { name: "Main menu" })
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot;
  });
  it("should render menu mobile and button for open and close the menu", () => {
    const { container } = renderTheme(
      <Menu links={LinksMock} logoData={logoData} />
    );
    const button = screen.getByLabelText("Open/Close menu");
    const menuContainer = button.nextSibling;
    expect(button).toHaveStyleRule("display", "none");
    expect(button).toHaveStyleRule("display", "flex", {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: theme.media.lteMedium,
    });
  });
});
