import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
