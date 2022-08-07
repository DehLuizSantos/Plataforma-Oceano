import React from "react";
import { Container } from "react-bootstrap";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <Container>
        <h2>Footer</h2>
      </Container>
    </S.FooterContainer>
  );
};

export default Footer;
