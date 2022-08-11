import React from "react";
import { Button, Container } from "react-bootstrap";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <Container>
        <S.NavbarWhapper>
          <Link href={"/"}>
            <div className="navbar-logo">
              <h2>Oceano Plataforma</h2>
            </div>
          </Link>
          <Link href={"/cadastrarTask"}>
            <Button variant="outline-primary">Cadastrar</Button>
          </Link>
          {/*  <div className="navbar-user-image">
            <Image
              src={"/user-default.png"}
              alt="exemplo"
              width={40}
              height={40}
            />
            <Button variant="primary">Login</Button>
          </div> */}
        </S.NavbarWhapper>
      </Container>
    </S.NavbarContainer>
  );
};

export default Navbar;
