import React from "react";
import P from "prop-types";
import * as Styled from "./styles";
import { Heading } from "../Heading";
export const LogoLink = ({ text, srcImg = "", link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string,
  srcImg: P.string,
  link: P.string,
};
