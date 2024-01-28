import React, { useEffect } from 'react';
import { Overlay, ModalStyle, BtnClose } from './WrapModal.styled';
import { MdClose } from 'react-icons/md';

const WrapModal = ({ children, closeModal, showModal }) => {
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
  return (
    <Overlay
      style={{ display: showModal ? 'block' : 'none' }}
      onClick={closeModal}
    >
      <ModalStyle>
        <BtnClose onClick={closeModal}>
          <MdClose className="btn-close" />
        </BtnClose>
        {children}
      </ModalStyle>
    </Overlay>
  );
};

export default WrapModal;
