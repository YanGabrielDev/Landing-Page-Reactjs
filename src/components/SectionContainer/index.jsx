import P from "prop-types";
import * as Styled from "./styles";
export const SectionContainer = ({ children, background = false }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
