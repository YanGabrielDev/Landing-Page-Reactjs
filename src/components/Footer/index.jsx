import P from "prop-types";
import React from "react";
import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export const Footer = ({ html, background }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
