import { string } from "prop-types";
import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          culpa quae fugiat, dolor esse voluptatum? Nesciunt, iste! Explicabo,
          facilis optio? Incidunt autem cumque quia adipisci dolores beatae
          delectus accusantium id!
        </p>
      </div>
    ),
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
