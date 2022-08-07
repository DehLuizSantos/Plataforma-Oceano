import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  ${({ theme })=> css`
    background: ${theme.colors.sheet}};
  `}
`

export const FooterWrapper = styled.div`
  ${({ theme })=> css`
    background: ${theme.colors.sheet}};
    color: ${theme.colors.text};
    display:flex;
    height:25px;
    display:flex;
    justify-content: space-around;
    font-weight: bold;
    p{
      cursor:pointer;
    }
  `}
`

