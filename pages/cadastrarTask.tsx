import type { ReactElement } from "react";
import ApplicationProviders from "../templates/AplicationProviders";

import type { NextPageWithLayout } from "./_app";
import Container from "react-bootstrap/Container";
import RegisterTask from "@/modules/RegisterTask";

const Page: NextPageWithLayout = () => {
  return (
    <Container>
      <RegisterTask />
    </Container>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <ApplicationProviders>{page}</ApplicationProviders>;
};

export default Page;
