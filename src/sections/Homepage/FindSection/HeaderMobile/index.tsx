import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faTree } from '@fortawesome/free-solid-svg-icons/faTree';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons/faUmbrellaBeach';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons/faArrowDownWideShort';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Container, Button, HeaderType } from './styles';

const BannerSlider: React.FC = () => {
  const items = [
    <HeaderType key="" href="#">
      <FontAwesomeIcon icon={faHouse} /> Todas
    </HeaderType>,
    <HeaderType key="" href="#">
      <FontAwesomeIcon icon={faMountain} /> Montanhas
    </HeaderType>,
    <HeaderType key="" href="#">
      <FontAwesomeIcon icon={faTree} /> Campo
    </HeaderType>,
    <HeaderType key="" href="#">
      <FontAwesomeIcon icon={faUmbrellaBeach} /> Praia
    </HeaderType>,
    <Button key="">
      <FontAwesomeIcon icon={faArrowDownWideShort} />
      Ordenar por
    </Button>,
    <Button key="">
      <FontAwesomeIcon icon={faFilter} />
      Filtrar
    </Button>,
  ];

  return (
    <Container>
      <AliceCarousel
        disableButtonsControls
        items={items}
        responsive={{
          0: {
            items: 2.2,
          },
        }}
      />
    </Container>
  );
};

export default BannerSlider;
