import { useEffect, useRef } from 'react';
import {
  Overlay,
  ModalStyle,
  ModalContent,
  CloseContainer,
  CloseButton,
} from './ModalWindow.styled';
import IconCloseModal from '../../img/IconCloseModal';

export const ModalWindow = ({ onShow = true, children, title, closeModal }) => {
  const modalRoot = document.querySelector('#modal-root');

  const modalContainerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const handleKey = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [modalRoot.children.length, onShow, closeModal]);

  return (
    <Overlay onClick={closeModal} ref={overlayRef}>
      <ModalStyle>
        <ModalContent
          onClick={e => e.stopPropagation()}
          ref={modalContainerRef}
        >
          <div>
            <h3>{title}</h3>
            <CloseContainer onClick={closeModal}>
              <CloseButton>
                <IconCloseModal size={24} />
              </CloseButton>
            </CloseContainer>
          </div>

          {children}
        </ModalContent>
      </ModalStyle>
    </Overlay>
  );
};
