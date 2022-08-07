import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/global";
import Layout from "../Layout";
import { light } from "../../styles/light";
import { dark } from "../../styles/dark";

type Props = {
  children: JSX.Element;
};

const ApplicationProviders: React.FC<Props> = ({ children }) => {
  const [toogle, setToogle] = React.useState(false);

  return (
    <ThemeProvider theme={toogle ? light : dark}>
      <GlobalStyles />
      <Layout>{children}</Layout>
      <button onClick={() => setToogle(!toogle)}>Troque o tema aqui</button>
    </ThemeProvider>
  );
};

export default ApplicationProviders;
