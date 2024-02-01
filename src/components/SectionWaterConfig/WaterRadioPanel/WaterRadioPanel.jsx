import { StyledRadioPanel } from './WaterRadioPanel.styled';
import { GoPlusCircle } from 'react-icons/go';
import theme from 'BasicStyle/themeJSX';
import { useState } from 'react';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';

export const WaterRadioPanel = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  let bgColor;
  let parsent = 160;

  const change = value => {
    if (value > 100) {
      parsent = 100;
      bgColor = `${theme.colors.primaryAccent}`;
    }
  };

  change(parsent);

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
        >
          <AddWaterModal />
        </GlobalModal>
      )}
    </>
  );
};