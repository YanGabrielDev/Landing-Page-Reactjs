import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";
import P from "prop-types";

export const NavLink = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string,
      newTab: P.bool,
    })
  ).isRequired,
};
