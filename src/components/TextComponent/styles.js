import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
