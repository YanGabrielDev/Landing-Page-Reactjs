import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: "";
      left: 50%;
      position: absolute;
      bottom: 0.9rem;
      width: 0;
      height: 0.3rem;
      background: ${theme.colors.secondaryBg};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
