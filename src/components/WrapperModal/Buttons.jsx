import React, { useState } from 'react';
import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal';
import { createPortal } from 'react-dom';
import WrapModal from './WrapModal';

export default function Buttons() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = event => {
    setShowModal(true);
  };

  // const closeModal = event => {
  //   console.log(event.target);
  //   if (
  //     event.key === 'ESCAPE' ||
  //     event.target === 'SECTION' ||
  //     event.target === 'svg'
  //   )
  //     setShowModal(false);
  // };

  // const handleKeyDown = event => {
  //   console.log(event);
  //   if (event.key === 'ESCAPE') {
  //     closeModal(false);
  //   }
  // };

  return (
    <div>
      <button onClick={openModal}>Norm</button>
      {showModal &&
        createPortal(
          <WrapModal closeModal={closeModal} showModal={showModal}>
            {/* <DailyNormalModal onClick={e => e.stopPropagation()} /> */}
          </WrapModal>,
          document.body
        )}
    </div>
  );
}
