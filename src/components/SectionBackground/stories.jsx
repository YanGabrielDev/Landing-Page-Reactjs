import { string } from "prop-types";
import { SectionBackground } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: "SectionBackground",
  },
  argTypes: {
    children: string,
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
