import P from "prop-types";
import * as Styled from "./styles";
export const SectionBackground = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionBackground.propType = {
  children: P.node.isRequired,
};
