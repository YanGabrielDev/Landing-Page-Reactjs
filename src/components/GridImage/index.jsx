import React from "react";
import P from "prop-types";
import { Heading } from "../Heading/index.jsx";
import { TextComponent } from "../TextComponent/index.jsx";
import { SectionBackground } from "../SectionBackground/index.jsx";
import * as Styled from "./styles.js";
export const GridImage = ({
  background = false,
  srcImg,
  altText,
  description,
  title,
  grid,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  background: P.bool,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    })
  ).isRequired,
};
