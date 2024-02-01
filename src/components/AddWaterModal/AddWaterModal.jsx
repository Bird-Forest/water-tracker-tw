import { useState } from 'react';

// import { ModalWindow } from '../ModalWindow/ModalWindow';
import {
  AddWater,
  ChooseText,
  AmountText,
  ButtonWrapper,
  StyledMinusIcon,
  StyledPlusIcon,
  FormStyled,
  ButtonSaveWrapper,
  StyledAddWaterModal,
} from './AddWaterModal.styled';

const AddWaterModal = ({ closeModal }) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [recordedTime, setRecordedTime] = useState(new Date());

  const handleAmountChange = evt => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'minus':
        setWaterAmount(state => Math.max(state - 50, 0));
        break;
      case 'plus':
        setWaterAmount(state => Math.min(state + 50, 4500));
        break;
      case 'input':
        const inputValue = Number(evt.target.value);
        const validInputValue = Math.min(Math.max(inputValue, 0), 4500);
        setWaterAmount(validInputValue);
        break;
      default:
    }
  };

  const handleSave = async evt => {
    evt.preventDefault();

    if (waterAmount === 0) {
      alert('Enter a non-zero value for water');
      return;
    }
    if (waterAmount < 0 || waterAmount === '') {
      alert('Enter a positive value for water');
      return;
    }
    if (!recordedTime) {
      alert('Enter the recording time');
      return;
    }

    // eslint-disable-next-line
    const saveWater = { amount: waterAmount, time: recordedTime };
  };

  return (
    <StyledAddWaterModal>
      {/* <ModalWindow closeModal={closeModal}> */}
      <AddWater>Add Water</AddWater>
      <ChooseText>Choose a value:</ChooseText>
      <AmountText>Amount of water:</AmountText>

      <ButtonWrapper>
        <button
          type="button"
          name="minus"
          onClick={handleAmountChange}
          disabled={waterAmount === 0}
        >
          <StyledMinusIcon aria-label="minus_button" />
        </button>

        <span>{waterAmount}ml</span>

        <button type="button" name="plus" onClick={handleAmountChange}>
          <StyledPlusIcon aria-label="plus_button" />
        </button>
      </ButtonWrapper>

      <FormStyled>
        <label>
          Recording time:
          <input
            type="time"
            value={recordedTime}
            onChange={evt => setRecordedTime(evt.target.value)}
          />
        </label>

        <label>
          Enter the value of the water used:
          <input
            name="input"
            type="number"
            value={waterAmount}
            onChange={evt => handleAmountChange(evt)}
            min="1"
            max="5000"
          />
        </label>

        <ButtonSaveWrapper>
          <p>{waterAmount}ml</p>
          <button onClick={handleSave}>Save</button>
        </ButtonSaveWrapper>
      </FormStyled>
      {/* </ModalWindow> */}
    </StyledAddWaterModal>
  );
};

export default AddWaterModal;
