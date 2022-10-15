import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/renderTheme";
import { SectionBackground } from ".";

describe("<SectionBackground/>", () => {
  it("should render background dark", () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});

it("should render background light", () => {
  renderTheme(
    <SectionBackground background={false}>
      <h1>Children</h1>
    </SectionBackground>
  );
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
