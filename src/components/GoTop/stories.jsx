import { GoTop } from ".";

export default {
  title: "GoTop",
  component: GoTop,
  args: {
    children: "nafksnk",
  },
};

export const Template = (args) => {
  return (
    <div
      style={{
        height: "400vh",
      }}
    >
      <GoTop {...args} />
    </div>
  );
};
