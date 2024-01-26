import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconCloseModal from '../../img/IconCloseModal';
import { Overlay, ModalStyle, CloseContainer, CloseBtn } from './Modal.styled';

const Modal = ({ children, closeModal, portalParent = document.body }) => {
  useEffect(() => {
    const handleKey = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={e => closeModal(e)}>
      <ModalStyle onClick={e => e.stopPropagation()}>
        <CloseContainer onClick={e => closeModal(e)}>
          <CloseBtn>
            <IconCloseModal size={24} />
          </CloseBtn>
        </CloseContainer>

        {children}
      </ModalStyle>
    </Overlay>,
    portalParent
  );
};

export default Modal;
