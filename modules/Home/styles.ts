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
      margin-top: 50px;
      padding: 30px;
      border-radius: 10px;
    `}

`
