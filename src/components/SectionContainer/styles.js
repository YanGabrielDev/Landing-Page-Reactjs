import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    width: 100%;
    padding: ${theme.spacings.large};
  `}
`;
