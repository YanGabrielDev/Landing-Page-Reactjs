import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { SectionContainer } from ".";

describe("<SectionContainer/>", () => {
  it("should render", () => {
    renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
