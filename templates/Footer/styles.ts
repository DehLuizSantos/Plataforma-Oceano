import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  ${({ theme })=> css`
    background: ${theme.colors.sheet}};
    color: ${theme.colors.primary};
    height: 75px;
    margin:0;
    padding:0;
  `}
`

