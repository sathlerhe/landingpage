import { Col, Container as GridContainer, Row } from 'react-grid-system';

import { Container, PartnershipSec, LogoTxt } from './styles';

export function Footer() {
  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <PartnershipSec>
              <div>
                <h6>Parceiro Oficial</h6>
                <LogoTxt />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet posuere at mauris enim nunc a id maecenas. Ac tortor
                arcu commodo malesuada. Sit vulputate ac lorem varius et.
              </p>
            </PartnershipSec>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
}

export default Footer;
