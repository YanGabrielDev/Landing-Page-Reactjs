import React from "react";
import * as Styled from "./styles";
import P from "prop-types";
export const TextComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
TextComponent.proptype = {
  children: P.node.isRequired,
};
