import styled, { css } from "styled-components";

export const ToogleThemeContainer = styled.div`
${({ theme }) => css`
  background-color:${theme.colors.secundary2};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  right:25px;
  top: 78px;
  align-items: center;
  position: fixed;
  z-index: 9999;
  cursor: pointer;
  button{
    border:none;
  }
`}

`
