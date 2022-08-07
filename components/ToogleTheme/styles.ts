import styled, { css } from "styled-components";

export const ToogleThemeContainer = styled.div`
${({ theme }) => css`
  background-color:${theme.colors.primary};
  border-radius: 30px;
  right: 30px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
  cursor: pointer;
  button{
    border:none;
  }
`}

`
