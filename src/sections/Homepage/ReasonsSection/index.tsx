import React from "react";
import { Col, Container as GridContainer, Row } from "react-grid-system";
import { useMediaQuery } from "@react-hook/media-query";

import { media } from "../../../../stitches.config";
import { Container } from "./styles";
import HouseMoney from "../../../../assets/svgs/house-money-icon.svg";
import Tabs from "./Tabs";
import TabsMobile from "./TabsMobile";

const ReasonsSection: React.FC = () => {
  const isMobile = useMediaQuery(media.xs);

  const reasons = [
    {
      key: "smart-buy",
      icon: <HouseMoney />,
      title: "Compra Inteligente",
      description:
        "Você paga mais barato para ser dono de um imóvel incrível, e ainda divide com mais 7 proprietários os custos de manutenção.",
    },
    {
      key: "payment",
      icon: <HouseMoney />,
      title: "Pagamento em até 10 anos",
      description:
        "Ser ou não ser, eis a questão. Será mais nobre em nosso espírito sofrer pedras e setas com que a Fortuna, enfurecida, nos alveja, ou insurgir-nos contra um mar de provocações e em luta pôr-lhes fim?",
    },
    {
      key: "online",
      icon: <HouseMoney />,
      title: "Agendamento Online",
      description:
        "Morrer… dormir: não mais. Dizer que rematamos com um sono a angústia e as mil pelejas naturais-herança do homem: Morrer para dormir… é uma consumação que bem merece e desejamos com fervor. Dormir… Talvez sonhar: eis onde surge o obstáculo: Pois quando livres do tumulto da existência, No repouso da morte o sonho que tenhamos devem fazer-nos hesitar: eis a suspeita que impõe tão longa vida aos nossos infortúnios.",
    },
    {
      key: "experience",
      icon: <HouseMoney />,
      title: "Experiências Customizadas",
      description: `Quem sofreria os relhos e a irrisão do mundo,
        o agravo do opressor, a afronta do orgulhoso,
        toda a lancinação do mal-prezado amor,
        a insolência oficial, as dilações da lei,
        os doestos que dos nulos têm de suportar
        o mérito paciente, quem o sofreria,
        quando alcançasse a mais perfeita quitação
        com a ponta de um punhal?`,
    },
  ];

  return (
    <Container id="know-more">
      <GridContainer>
        <Row>
          <Col>
            {isMobile ? (
              <TabsMobile reasons={reasons} />
            ) : (
              <Tabs reasons={reasons} />
            )}
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default ReasonsSection;
