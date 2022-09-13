import React from 'react';
import Image from 'next/image';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons/faMobileButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';

import {
  Container,
  Form,
  FormInputs,
  Input,
  Button,
  CheckboxContainer,
  InputContainer,
  Checkbox,
} from './styles';

const AboutSection: React.FC = () => {
  return (
    <Container id="contact">
      <Image
        width="1168px"
        height="1046px"
        className="image__form"
        src="/assets/imgs/image-form.webp"
        alt="beach house"
      />
      <Form>
        <h1>Receba nossas novidades</h1>

        <FormInputs>
          <InputContainer>
            <FontAwesomeIcon icon={faUser} />
            <Input type="text" placeholder="Nome" />
          </InputContainer>

          <InputContainer>
            <FontAwesomeIcon icon={faEnvelope} />
            <Input type="email" placeholder="E-mail" />
          </InputContainer>

          <InputContainer>
            <FontAwesomeIcon icon={faMobileButton} />
            <Input
              type="text"
              placeholder="seu celular Ex: +55 (99) 9 9 999-9999"
            />
          </InputContainer>

          <CheckboxContainer>
            <Checkbox type="checkbox" />
            Receber contato via Whatsapp
          </CheckboxContainer>

          <InputContainer id="address__form">
            <FontAwesomeIcon icon={faHouse} />
            <Input
              type="text"
              placeholder="Em qual lugar você gostaria de encontrar sua casa?"
            />
          </InputContainer>
        </FormInputs>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default AboutSection;
