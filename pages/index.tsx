import type { ReactElement } from "react";
import ApplicationProviders from "../templates/AplicationProviders";

import type { NextPageWithLayout } from "./_app";
import Container from "react-bootstrap/Container";
import Home from "../modules/Home";

const Page: NextPageWithLayout = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <ApplicationProviders>{page}</ApplicationProviders>;
};

export default Page;
