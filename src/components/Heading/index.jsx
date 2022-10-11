import * as Styled from "./styles";
import P from "prop-types";
export const Heading = ({ children,  size= 'huge', colorDark = true, as = "h1", uppercase = false }) => {
  return (
    <Styled.Title colorDark={colorDark} size={size} as={as} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: P.oneOf(['small', 'medium','big', 'huge']),
  uppercase: P.bool
};
