import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <Container>
        <S.FooterWrapper>
          <Link href="/">
            <p>Oceano Plataforma</p>
          </Link>
          <Link href={"https://github.com/DehLuizSantos/Plataforma-Oceano"}>
            <p>© 2022 André Luiz.</p>
          </Link>
        </S.FooterWrapper>
      </Container>
    </S.FooterContainer>
  );
};

export default Footer;
