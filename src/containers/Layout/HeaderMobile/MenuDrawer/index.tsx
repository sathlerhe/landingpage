import React, { Dispatch, memo, SetStateAction, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, MenuHeader, MenuBody, MenuItem } from "./styles";
import Logo from "../../../../components/Logo";

interface IMenuDrawer {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuDrawer: React.FC<IMenuDrawer> = ({ isOpen, setIsOpen, ...props }) => {
  const customStyles = {
    overlay: {
      zIndex: 3,
    },
  };

  return (
    <Container
      {...props}
      setIsOpen={setIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick
      style={customStyles}
      closeTimeoutMS={100}
      isOpen={isOpen}
    >
      <MenuHeader>
        <FontAwesomeIcon
          className="times__header"
          icon={faTimes}
          onClick={() => setIsOpen(false)}
        />{" "}
        <Logo />
      </MenuHeader>
      <MenuBody>
        <MenuItem>
          <span>Sobre</span>
        </MenuItem>
        <MenuItem>
          <span>Encontre Sua Mydoor</span>
        </MenuItem>
        <MenuItem>
          <span>Saiba Mais</span>
        </MenuItem>
        <MenuItem>
          <span>Contato</span>
        </MenuItem>
      </MenuBody>
    </Container>
  );
};

export default memo(MenuDrawer);
