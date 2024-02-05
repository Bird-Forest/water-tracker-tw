import { StyledRadioPanel } from './WaterRadioPanel.styled';
import { GoPlusCircle } from 'react-icons/go';
import theme from 'BasicStyle/themeJSX';
import { useState } from 'react';
// import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';
import { useSelector } from 'react-redux';
// import { selectPercentage } from '../../../redux/tracker/selectors';
import { selectDailyNorma } from '../../../redux/auth/selectors';
import { selectTotalWater } from '../../../redux/tracker/selectors';
import TodayListModal from 'components/AddWaterModal/TodayListModal';
// import { selectDailyWaterAmount } from '../../../redux/tracker/selectors';

export const WaterRadioPanel = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  // const { percentage } = useSelector(selectDailyWaterAmount);
  // ************
  const normUser = useSelector(selectDailyNorma);
  const totalWater = useSelector(selectTotalWater);
  const percentage = Math.round((totalWater / (normUser * 1000)) * 100);
  // const percentage = useSelector(selectPercentage);
  // ******

  let parsent = percentage;
  let bgColor;

  if (percentage >= 100) {
    parsent = 100;
    bgColor = theme.colors.primaryAccent;
  }

  return (
    <>
      <StyledRadioPanel $bgColor={bgColor} $parsent={parsent}>
        <div className="radio-panel-body">
          <h3 className="radio-panel-title">Today</h3>
          <div className="radio-panel-line">
            <span className="line-start"></span>
            <span className="line-center"></span>
            <span className="line-end"></span>
          </div>
          <div className="radio-panel-wrapper-parsent">
            <p className="radio-panel-parsent start">0%</p>
            <p className="radio-panel-parsent center">50%</p>
            <p className="radio-panel-parsent end">100%</p>
          </div>
        </div>
        <button onClick={handleOpenModal} className="radio-panel-btn">
          <GoPlusCircle className="icon-btn" />
          Add Water
        </button>
      </StyledRadioPanel>
      {openModal && (
        <GlobalModal
          $position={'center'}
          openModal={openModal}
          setOpenModal={setOpenModal}
         //  title={'add Water'}
        >
          <TodayListModal closeModal={setOpenModal} isEditing={false} />
        </GlobalModal>
      )}
    </>
  );
};
