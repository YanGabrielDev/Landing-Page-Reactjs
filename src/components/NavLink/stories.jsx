import { NavLink } from ".";
export default {
  title: "NavLink",
  component: NavLink,
  args: {
    children: "NavLink",
  },
  argTypes: {
    children: { types: "string" },
  },
};
export const Template = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  );
};
