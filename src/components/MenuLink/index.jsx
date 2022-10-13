import React from "react";
import * as Styled from "./styles";
import P from "prop-types";
export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
MenuLink.prototype = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
