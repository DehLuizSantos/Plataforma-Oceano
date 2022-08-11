import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  ${({ theme })=> css`
    background: ${theme.colors.sheet}};
    color: ${theme.colors.primary};
    .navbar-logo{
      cursor: pointer;
    }
  `}
`
export const NavbarWhapper = styled.div`
  ${({theme}) => css`
    display:flex;
    gap:50px;
    align-items: center;
    height: 75px;
    h2{
      font-size:${theme.variants.font.sizes.sl};
      color:${theme.colors.text};
    }
    .navbar-user-image{
      display:flex;
      margin-left: auto;
      gap:30px;
      img{
        border-radius:50%;
      }
    }
  `}

`
