import React from "react";
import * as Styled from "./styles";
import P from "prop-types";
export const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
TextComponent.proptype = {
  children: P.node.isRequired,
};
