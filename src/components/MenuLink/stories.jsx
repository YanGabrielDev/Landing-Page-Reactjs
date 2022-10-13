import { MenuLink } from ".";
export default {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: "wrwqrwqrqr",
    link: "https://open.spotify.com/playlist/7kqJCx2VZhUbAKQykekPQn?si=iQsbN7i4S5O6ArORTXK16w&nd=1",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
