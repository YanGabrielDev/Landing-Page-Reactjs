import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { GridTwoColumns } from ".";
import mocks from "./mocks";

describe("<GridTwoColumns/>", () => {
  it("should render", () => {
    renderTheme(<GridTwoColumns {...mocks} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
