import type { ReactElement } from "react";
import Layout from "../templates/Layout";
/* import NestedLayout from "../components/nested-layout"; */
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;