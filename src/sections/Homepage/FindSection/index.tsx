import React from 'react';
import Image from 'next/image';
import { Col, Container as GridContainer, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { useMediaQuery } from '@react-hook/media-query';

import { media } from '../../../../stitches.config';
import {
  Container,
  FindHouses,
  HouseCard,
  PriceContent,
  LocalContent,
  InfoContent,
  Divider,
  HouseButton,
  DescriprionContent,
} from './styles';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import HousesListMobile from './HousesListMobile';

const FindSection: React.FC = () => {
  const isMobile = useMediaQuery(media.xs);

  const houses = [
    {
      img: '/assets/imgs/house_card.webp',
      price: 600000,
      local: 'São José dos Campos, SP',
      title: 'Maresias',
      description:
        'Casa a 70m da praia, condomínio fechado com piscina, churrasqueira e área de esportes.',
      suite: 5,
      area: 1000,
    },
    {
      img: '/assets/imgs/house_card.webp',
      price: 600000,
      local: 'São José dos Campos, SP',
      title: 'Maré',
      description:
        'Casa a 70m da praia, condomínio fechado com piscina, churrasqueira e área de esportes.',
      suite: 5,
      area: 1000,
    },
    {
      img: '/assets/imgs/house_card.webp',
      price: 600000,
      local: 'São José dos Campos, SP',
      title: 'Sias',
      description:
        'Casa a 70m da praia, condomínio fechado com piscina, churrasqueira e área de esportes.',
      suite: 5,
      area: 1000,
    },
    {
      img: '/assets/imgs/house_card.webp',
      price: 600000,
      local: 'São José dos Campos, SP',
      title: 'Casa de praia',
      description:
        'Casa a 70m da praia, condomínio fechado com piscina, churrasqueira e área de esportes.',
      suite: 5,
      area: 1000,
    },
  ];

  return (
    <Container id="your-house">
      <GridContainer className="find__grid">
        <Row>
          <Col>
            <h1>Encontre sua Casa</h1>

            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}

            {isMobile ? (
              <HousesListMobile houses={houses} />
            ) : (
              <FindHouses>
                {houses?.map((house) => (
                  <HouseCard key={house?.title}>
                    <Image
                      width="368px"
                      height="230px"
                      className="image__card"
                      src={house?.img}
                      alt={house?.title}
                    />
                    <PriceContent>R${house?.price}/cota</PriceContent>

                    <DescriprionContent>
                      <LocalContent>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {house?.local}
                      </LocalContent>
                      <h3>{house?.title}</h3>
                      <p>{house?.description}</p>
                      <InfoContent>
                        <p>
                          <FontAwesomeIcon icon={faBed} />
                          {house?.suite} Suítes
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faHouse} />
                          {house?.area}m²
                        </p>
                      </InfoContent>
                      <Divider />
                      <HouseButton>Conheça</HouseButton>{' '}
                    </DescriprionContent>
                  </HouseCard>
                ))}
              </FindHouses>
            )}
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default FindSection;
