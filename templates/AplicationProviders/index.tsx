import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/global";
import Layout from "../Layout";
import { light } from "../../styles/light";
import { dark } from "../../styles/dark";
import ToogleTheme from "../../components/ToogleTheme";
import { useDispatch, useSelector } from "react-redux";
import { selectToogle, setToogle } from "../../redux/store/toogleSlice";
import { wrapper } from "../../redux/store/store";

type Props = {
  children: JSX.Element;
};

const ApplicationProviders: React.FC<Props> = ({ children }) => {
  const toogleState = useSelector(selectToogle);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={toogleState ? light : dark}>
      <GlobalStyles />
      <Layout>{children}</Layout>
      <ToogleTheme
        onChangeToogle={() =>
          toogleState ? dispatch(setToogle(false)) : dispatch(setToogle(true))
        }
        toogleIcon={toogleState}
      />
    </ThemeProvider>
  );
};

export default ApplicationProviders;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setToogle(false));
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);
