import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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
    children: "string",
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
