import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

export const GridText = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

GridText.propTypes = {
  children: P.node.isRequired,
};
