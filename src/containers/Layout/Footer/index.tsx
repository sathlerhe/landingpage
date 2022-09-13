import { ReactNode } from "react";
import { Col, Container as GridContainer, Row } from "react-grid-system";

import { Container, FooterSection, FooterLinks, FooterSm, LogoTxt } from "./styles";
import Instagram from "../../../../assets/svgs/instagram.svg";
import Facebook from "../../../../assets/svgs/facebook.svg";
import Partnership from "./Partnership";
import Link from "next/link";
import Logo from "../../../components/Logo";

export function Footer() {
  const footerLinks = [
    { name: "Termos de Uso", link: "#" },
    { name: "Política de Privacidade", link: "#" },
    { name: "Dúvidas", link: "#" },
    { name: "Contato", link: "#" },
  ];

  return (
    <Container>
      <Partnership />
      <GridContainer>
        <Row>
          <Col>
            <FooterSection>
              <Logo />

              <FooterLinks>
                {footerLinks?.map((link) => (
                  <Link key={link?.name} href={link?.link}>
                    {link?.name}
                  </Link>
                ))}{" "}
                <FooterSm>
                  <Link href="#">
                    <Instagram />
                  </Link>
                  <Link href="#">
                    <Facebook />
                  </Link>
                </FooterSm>
              </FooterLinks>

              <div className="partnership__footer">
                <p>Parceiro Oficial</p>
                <LogoTxt />
              </div>
            </FooterSection>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
}

export default Footer;
