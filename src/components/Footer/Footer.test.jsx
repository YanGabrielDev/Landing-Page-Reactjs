import { renderTheme } from "../../styles/renderTheme";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer footerHtml="<h1>testeu</h1>" />);
    expect(container).toMatchSnapshot();
  });
});
