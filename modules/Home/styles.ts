import styled, {css} from "styled-components";
import Form from "react-bootstrap/Form";


export const ContainerHome = styled.div`
  ${({theme})=> css`
    color: ${theme.colors.text};
    padding:50px 0;
    h1{
      font-size:${theme.variants.font.sizes.sl};
      font-weight:bold;
    }
  `}
`

export const FormGroupStyled = styled(Form.Group)`
  ${() => css`
    display:flex;
    gap:20px;
  `}
`

export const TaskInformationWrapper = styled.div`
    ${({theme}) => css`
      background-color: ${theme.colors.sheet};
      box-shadow: 0px 10px 30px ${theme.colors.boxShadow};
      margin-top: 50px;
      padding: 30px;
      border-radius: 10px;
      .image-loading{
        display: flex;
        justify-content:center;
        align-items: center;
      }
    `}

`

export const TaskInfosTable = styled.div`
  ${({theme}) => css`
    h2{
      color: ${theme.colors.primary};
      font-size: ${theme.variants.font.sizes.sl};
      border-bottom: 1px solid ${theme.colors.primary};
      text-align: center;
    }
    .card-task{
      border: 1px solid ${theme.colors.primary};
      display: flex;
      gap: 5px;
      border:1px solid ${theme.colors.text};
      border-radius:5px;
      justify-content: center;
      align-items:center;
      padding:2px;
      margin:10px;
      p{
        font-size:${theme.variants.font.sizes.sm};
        color:${theme.colors.text};
        margin-bottom: 0;
      }
      span {
        color:${theme.colors.primary2};
        font-size:${theme.variants.font.sizes.sm};
      }
    }

  `}

`
