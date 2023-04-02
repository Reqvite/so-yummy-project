import PropTypes from "prop-types";
import styled from "styled-components";

import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  });

  const closeModal = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;
const ModalContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;
export default Modal;
