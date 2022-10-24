import mapData from "./map-data";
describe("map-data", () => {
  it("should map data even if there is no data", () => {
    const pageData = mapData();
    expect(pageData.footerHtml).toBe("");
    expect(pageData.slug).toBe("");
    expect(pageData.title).toBe("");
    expect(pageData.sections).toEqual([]);
    expect(pageData.menu).toEqual({});
  });
});

it("should map data even if data is present", () => {
  const pageData = mapData([
    {
      footer_text: "<p>Hey</p>",
      slug: "slug",
      title: "title",
      sections: [1, 2, 3, 4],
      footer_text: "<p>Hey</p>",
      menu: { a: "b" },
    },
  ])[0];
  expect(pageData.footerHtml).toBe("<p>Hey</p>");
  expect(pageData.slug).toBe("");
  expect(pageData.title).toBe("");
  expect(pageData.sections).toEqual([1, 2, 3, 4]);
  expect(pageData.menu).toEqual({ a: "b" });
});
