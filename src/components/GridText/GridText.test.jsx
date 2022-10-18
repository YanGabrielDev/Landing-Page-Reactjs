import { Screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { GridText } from ".";
import mock from "./mock";

describe("<GridText />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
