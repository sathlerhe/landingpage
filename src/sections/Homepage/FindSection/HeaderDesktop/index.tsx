import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faTree } from '@fortawesome/free-solid-svg-icons/faTree';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons/faUmbrellaBeach';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons/faArrowDownWideShort';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';

import {
  FindHeader,
  HeaderTypes,
  HeaderButtons,
  Button,
  HeaderType,
} from './styles';

const HeaderDesktop: React.FC = () => {
  return (
    <FindHeader>
      <HeaderTypes>
        <HeaderType href="#">
          <FontAwesomeIcon icon={faHouse} /> Todas
        </HeaderType>

        <HeaderType href="#">
          <FontAwesomeIcon icon={faMountain} /> Montanhas
        </HeaderType>

        <HeaderType href="#">
          <FontAwesomeIcon icon={faTree} /> Campo
        </HeaderType>

        <HeaderType href="#">
          <FontAwesomeIcon icon={faUmbrellaBeach} /> Praia
        </HeaderType>
      </HeaderTypes>

      <HeaderButtons>
        <Button>
          <FontAwesomeIcon icon={faArrowDownWideShort} />
          Ordenar por
        </Button>
        <Button>
          <FontAwesomeIcon icon={faFilter} />
          Filtrar
        </Button>
      </HeaderButtons>
    </FindHeader>
  );
};

export default HeaderDesktop;
