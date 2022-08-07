import React from "react";
import { Container } from "react-bootstrap";
import * as S from "./styles";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <Container>
        <h2>Navbar</h2>
      </Container>
    </S.NavbarContainer>
  );
};

export default Navbar;
