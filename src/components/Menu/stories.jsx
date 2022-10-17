import { Menu } from ".";
import linksMock from "../NavLink/mocks";
export default {
  title: "Menu",
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: "logo",
      link: "#target",
      srcImv: "",
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
