import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { Menu } from ".";
import LinksMock from "../NavLink/mocks";

const logoData = {
  text: "Logo",
  link: " #tagert",
};
describe("<Menu/>", () => {
  it("should render", () => {
    renderTheme(<Menu Links={LinksMock} LogoData={logoData} />);

    expect(
      screen.getByRole("heading", { name: "Main menu" })
    ).toBeInTheDocument();
  });
});
