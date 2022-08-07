import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  ${({ theme })=> css`
    background: ${theme.colors.sheet}};
    color: ${theme.colors.primary};
    height: 75px;
  `}
`

