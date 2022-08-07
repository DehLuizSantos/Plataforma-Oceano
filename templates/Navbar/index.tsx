import React from "react";
import { Button, Container } from "react-bootstrap";
import * as S from "./styles";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <Container>
        <S.NavbarWhapper>
          <div className="navbar-logo">
            <h2>Oceano Plataforma</h2>
          </div>
          <div className="navbar-user-image">
            <Image
              src={"/user-default.png"}
              alt="exemplo"
              width={40}
              height={40}
            />
            <Button variant="outline-primary">Login</Button>
          </div>
        </S.NavbarWhapper>
      </Container>
    </S.NavbarContainer>
  );
};

export default Navbar;
