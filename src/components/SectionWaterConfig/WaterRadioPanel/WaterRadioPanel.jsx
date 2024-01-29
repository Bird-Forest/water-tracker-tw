// import { useState } from 'react';
import { StyledRadioPanel } from './WaterRadioPanel.styled';
import { GoPlusCircle } from 'react-icons/go';
import theme from 'BasicStyle/themeJSX';

export const WaterRadioPanel = () => {
  //   const [openModal, setOpenModal] = useState(false);

  //  const handleOpenModal = () => {
  //    setOpenModal(true);
  //  };
  //   const handleСloseModal = () => {
  //     setOpenModal(false);
  //   };
  let bgColor;
  let previousValue = 30;
  let newValue = 60;

  const change = value => {
    if (value > 100) {
      newValue = 100;
      bgColor = `${theme.colors.primaryAccent}`;
    }
  };

  change(newValue);

  return (
    <>
      <StyledRadioPanel
        $bgColor={bgColor}
        $previousValue={previousValue}
        $newValue={newValue}
      >
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
        {/* onClick={handleOpenModal} - Подію повішати на кнопку! */}
        <button className="radio-panel-btn">
          <GoPlusCircle className="icon-btn" />
          Add Water
        </button>
      </StyledRadioPanel>
      {/* {openModal && <AddWater closeModal={handleСloseModal} />} */}
    </>
  );
};
