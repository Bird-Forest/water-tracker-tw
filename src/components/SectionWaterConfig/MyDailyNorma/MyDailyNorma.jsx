import { useState } from 'react';
import { StyledDailyNorma } from './MyDailyNorma.styled';
import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';
import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../../redux/auth/selectors';

export const MyDailyNorma = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const dailyNorma = useSelector(selectDailyNorma);

  // const handleCloseModal = () => {
  //     setOpenModal(false);
  //   };

  return (
    <>
      <StyledDailyNorma>
        <h3 className="daily-norma-title">My daily norma</h3>
        <div className="daily-norma-body">
          <p className="daily-norma-text">{dailyNorma || '23'} L</p>
          <button
            onClick={handleOpenModal}
            className="daily-norma-btn"
            type="button"
          >
            Edit
          </button>
        </div>
      </StyledDailyNorma>
      {/* {openModal && <DailyNormalModal closeModal={handleCloseModal} />} */}
      {openModal && (
        <GlobalModal openModal={openModal} setOpenModal={setOpenModal}>
          <DailyNormalModal
            closeModal={setOpenModal}
            title={'My daily norma'}
          />
        </GlobalModal>
      )}
    </>
  );
};
