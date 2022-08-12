import styled, { css } from "styled-components";

export const ContainerRegister = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.text};
    padding:50px 0;

  `}

`

export const RegisterWrapper = styled.div`
${({theme}) => css`
    margin: 10px 0;
    background: ${theme.colors.sheet};
    box-shadow: 0px 10px 30px #d1d5df;
    padding: 50px;
    border-radius: 10px;
    .image-loading{
      display: flex;
      justify-content: center;
      align-items: center;
    }
     h1{
      font-size:${theme.variants.font.sizes.sl};
      font-weight:bold;
      margin-bottom: 20px;
    }
`}

`
