import { Base } from ".";
import mock from "./mock";
import { GridText } from "../../components/GridText";
import gridMock from "../../components/GridText/mock";

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
    </>
  ),
  ...mock,
};

export default {
  title: "Base",
  component: Base,
  args: mockBase,
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
