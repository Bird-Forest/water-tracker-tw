// import { useState } from 'react';
import { StyledRadioPanel } from './WaterRadioPanel.styled';
import { GoPlusCircle } from 'react-icons/go';

export const WaterRadioPanel = () => {
  //   const [openModal, setOpenModal] = useState(false);

   //  const handleOpenModal = () => {
   //    setOpenModal(true);
   //  };
  //   const handleСloseModal = () => {
  //     setOpenModal(false);
  //   };

  return (
    <>
      <StyledRadioPanel previousValue={'0'} newValue={'30'}>
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
		  {/* onClick={handleOpenModal} - Подію повішати на кнопку! */}
        <button  className="radio-panel-btn"> 
          <GoPlusCircle className="icon-btn" />
          Add Water
        </button>
      </StyledRadioPanel>
      {/* {openModal && <AddWater closeModal={handleСloseModal} />} */}
    </>
  );
};
