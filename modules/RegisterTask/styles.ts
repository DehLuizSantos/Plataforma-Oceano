import styled, { css } from "styled-components";

export const ContainerRegister = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.text};
    padding:50px 0;

  `}

`

export const RegisterWrapper = styled.div`
${({theme}) => css`
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
      border-bottom:1px solid ${theme.colors.primary};
      padding:5px;
      color:${theme.colors.text};
    }
    .form-register{
      .row{
        border-radius:5px;
        border:1px solid ${theme.colors.secundary2};
        padding:15px;
        margin:15px;
      }
      label.form-label{
        color: ${theme.colors.secundary2};
        font-weight: bold;
      }
    }
`}

`
