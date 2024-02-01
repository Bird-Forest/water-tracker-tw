import { useEffect } from 'react';
import { GlobalBodyModalWrapper } from './GlobalBodyModalWrapper/GlobalBodyModalWrapper';
import { GlobalOverlay } from './GlobalOverlay/GlobalOverlay';

export const GlobalModal = ({
  width,
  height,
  openModal,
  $position,
  setOpenModal,
  children,
}) => {
  const handleCloseModal = e => {
    if (
      e.target !== e.currentTarget &&
      e.target.nodeName !== 'svg' &&
      e.target.nodeName !== 'path' &&
      e.target.nodeName !== 'BUTTON'
    ) {
      return;
    }
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } 
    const handelKey = function (e) {
      if (e.key === 'Escape') {
        setOpenModal(false);
      }
    };
    window.addEventListener('keydown', handelKey);
    return () => {
      window.removeEventListener('keydown', handelKey);
		document.body.style.overflow = 'visible';
    };
  }, [setOpenModal, openModal]);

  return (
    <GlobalOverlay $position={$position} closeModal={handleCloseModal}>
      <GlobalBodyModalWrapper width={width} height={height}>
        {children}
      </GlobalBodyModalWrapper>
    </GlobalOverlay>
  );
};
