import { screen, Screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { NavLink } from ".";
import mocks from "./mocks";

describe("<NavLink/>", () => {
  it("should render", () => {
    renderTheme(<NavLink links={mocks} />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
});
