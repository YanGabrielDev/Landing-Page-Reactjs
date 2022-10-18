import { Footer } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    html: `<p><a href="https://beacons.page/otaviomiranda">Feito para aprendizado</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
