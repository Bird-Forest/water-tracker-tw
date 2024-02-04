import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   addWaterEntry,
//   updateWaterEntry,
// } from '../../redux/tracker/operations';

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

const AddWaterModal = ({ isEditing, initialAmount, initialTime }) => {
  const [amountWater, setAmountWater] = useState(initialAmount || 0);
  const [recordedTime, setRecordedTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const handleAmountChange = evt => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'minus':
        setAmountWater(state => Math.max(state - 50, 0));
        break;
      case 'plus':
        setAmountWater(state => Math.min(state + 50, 5000));
        break;
      case 'input':
        const inputValue = Number(evt.target.value);
        const validInputValue = Math.min(Math.max(inputValue, 0), 5000);
        setAmountWater(validInputValue);
        break;
      default:
    }
  };

  const handleSave = async evt => {
    evt.preventDefault();

    if (amountWater === 0) {
      alert('Enter a non-zero value for water');
      return;
    }
    if (amountWater < 0 || amountWater === '') {
      alert('Enter a positive value for water');
      return;
    }
    if (!recordedTime) {
      alert('Enter the recording time');
      return;
    }

    // eslint-disable-next-line
    const saveWater = { amountWater: amountWater, time: recordedTime };
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  return (
    <StyledAddWaterModal>
      <AddWater>{title}</AddWater>
      <ChooseText>
        {isEditing && (
          <div>
            <h3>Entered records:</h3>
            <p>
              {initialAmount
                ? `${initialAmount} at ${initialTime}`
                : 'No value entered'}
            </p>
          </div>
        )}
      </ChooseText>

      <ChooseText>
        {isEditing ? 'Correct entered data:' : 'Choose a value:'}
      </ChooseText>

      <AmountText>Amount of water:</AmountText>

      <ButtonWrapper>
        <button
          type="button"
          name="minus"
          onClick={handleAmountChange}
          disabled={amountWater === 0}
        >
          <StyledMinusIcon aria-label="minus_button" />
        </button>

        <span>
          {/* <input
            type="number"
            value={amountWater}
            onChange={handleAmountChange}
            onBlur={() =>
              setWaterAmount(prevAmount => prevAmount || initialAmount || 0)
            }
          /> */}
          {amountWater}ml
        </span>

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
            // step="500"
          />
        </label>

        <label>
          Enter the value of the water used:
          <input
            name="input"
            type="number"
            value={amountWater}
            onChange={evt => handleAmountChange(evt)}
            min="1"
            max="5000"
          />
        </label>

        <ButtonSaveWrapper>
          <p>{amountWater}ml</p>
          <button onClick={handleSave}>Save</button>
        </ButtonSaveWrapper>
      </FormStyled>
    </StyledAddWaterModal>
  );
};

export default AddWaterModal;
