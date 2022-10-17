import { GridTwoColumns } from ".";

import ReatImage from "../../images/react-2.svg";
import mocks from "./mocks";

export default {
  title: "GridTwoColumns",
  component: GridTwoColumns,
  args: mocks,
  argTypes: {
    children: { type: "string" },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
