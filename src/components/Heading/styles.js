import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
export const Title = styled.h1`
  ${({ theme, colorDark }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
