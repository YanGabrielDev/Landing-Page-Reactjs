import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { GoTop } from ".";

describe("<GoTop/>", () => {
  it("should render", () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toBeInTheDocument();
  });
});
