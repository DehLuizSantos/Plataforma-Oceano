import styled, { css } from "styled-components";

export const ContainerRegister = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.text};
    padding:50px 0;

  `}

`

export const RegisterWrapper = styled.div`
${({theme}) => css`
    margin: 50px 0;
    background: ${theme.colors.sheet};
    box-shadow: 0px 10px 30px #d1d5df;
    padding: 50px 0;
    border-radius: 10px;
     h1{
      font-size:${theme.variants.font.sizes.sl};
      font-weight:bold;
      margin: 20px;
    }
`}

`
