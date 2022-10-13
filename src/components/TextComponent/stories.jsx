import { TextComponent } from ".";
export default {
  title: "Text",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Illo officiis enim cum pariatur porro,
     rem vitae tenetur ab saepe atque dolorem deleniti asperiores, 
    doloribus harum. Quia architecto sint ab aspernatur?`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => <TextComponent {...args} />;
