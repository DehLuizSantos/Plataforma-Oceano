import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import { wrapper } from "../redux/store/store";

import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
