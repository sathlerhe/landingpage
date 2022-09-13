import { Col, Container as GridContainer, Row } from "react-grid-system";
import Link from "next/link";

import { Container, HeaderContent, HeaderLinks } from "./styles";
import Logo from "../../../components/Logo";

export function Header() {
  const headerLinks = [
    { name: "Sobre", link: "#about" },
    { name: "Encontre sua casa", link: "#your-house" },
    { name: "Saiba Mais", link: "#know-more" },
    { name: "Contato", link: "#contact" },
  ];

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <HeaderContent>
              <Logo />

              <HeaderLinks>
                {headerLinks?.map((link) => (
                  <Link key={link?.name} href={link?.link}>
                    {link?.name}
                  </Link>
                ))}
              </HeaderLinks>
            </HeaderContent>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
}

export default Header;
