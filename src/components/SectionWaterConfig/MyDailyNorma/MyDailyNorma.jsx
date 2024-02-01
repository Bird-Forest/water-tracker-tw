import { useState } from 'react';
import { StyledDailyNorma } from './MyDailyNorma.styled';
import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal';

export const MyDailyNorma = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <StyledDailyNorma>
        <h3 className="daily-norma-title">My daily norma</h3>
        <div className="daily-norma-body">
          <p className="daily-norma-text">1.5 L</p>
          <button
            onClick={handleOpenModal}
            className="daily-norma-btn"
            type="button"
          >
            Edit
          </button>
        </div>
      </StyledDailyNorma>
      {openModal && <DailyNormalModal closeModal={handleCloseModal} />}
    </>
  );
};

// import { useState } from 'react';
// import { StyledDailyNorma } from './MyDailyNorma.styled';
// import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal';
// import Modal from 'components/ModalWindow/Modal';

// export const MyDailyNorma = () => {
//   const [activeModal, setActiveModal] = useState(null);

//   const handleOpenModal = modalType => {
//     setActiveModal(modalType);
//   };

//   const handleCloseModal = () => {
//     setActiveModal(null);
//   };

//   return (
//     <>
//       <StyledDailyNorma>
//         <h3 className="daily-norma-title">My daily norma</h3>
//         <div className="daily-norma-body">
//           <p className="daily-norma-text">1.5 L</p>
//           <button
//             onClick={() => handleOpenModal('dailyNormal')}
//             className="daily-norma-btn"
//             type="button"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => handleOpenModal('someModal')}
//             className="daily-norma-btn"
//             type="button"
//           >
//             Some Modal
//           </button>
//         </div>
//       </StyledDailyNorma>
//       {activeModal === 'dailyNormal' && (
//         <DailyNormalModal closeModal={handleCloseModal} />
//       )}
//       {activeModal === 'someModal' && <Modal closeModal={handleCloseModal} />}
//     </>
//   );
// };
