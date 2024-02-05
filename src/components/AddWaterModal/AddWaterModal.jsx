import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import {
  addWaterEntry,
  // updateWaterEntry,
  // getDailyWaterAmount,
} from '../../redux/tracker/operations';

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
import { selectDailyNorma } from '../../redux/auth/selectors';
import { selectTotalWater } from '../../redux/tracker/selectors';

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
  // *******
  const dispatch = useDispatch();
  const normUser = useSelector(selectDailyNorma);
  const totalWater = useSelector(selectTotalWater);
  // ********
  const handleSave = evt => {
    evt.preventDefault();
    // const amountWater = evt.target.input;
    console.log(amountWater);

    if (amountWater === 0) {
      Notiflix.Notify.warning(
        'A non-zero value must be entered for the amount of water'
      );
      return;
    }
    if (amountWater < 0 || amountWater === '') {
      Notiflix.Notify.warning(
        'It is necessary to enter a positive value for the amount of water'
      );
      return;
    }
    // if (!recordedTime) {
    //   Notiflix.Notify.warning('Enter the recording time');
    //   return;
    // }
    // const newTime = new Date(recordedTime);
    // eslint-disable-next-line
    // *** Додавання
    // const newPercentage = `(${totalWater}+${amountWater})/${normUser}`;
    const newPercentage = Math.round(
      ((totalWater + amountWater) / (normUser * 1000)) * 100
    );
    const date = new Date();
    const newDay = date.getDate();
    console.log(newDay);
    const saveWater = { amountWater: amountWater, day: newDay };
    const portion = { saveWater, newPercentage };
    console.log(portion);
    dispatch(addWaterEntry(saveWater));
    // ***
    //   .then(() => {
    //     Notiflix.Notify.success('Amount of water added successfully!');
    //     dispatch(getDailyWaterAmount());
    //   //! опційно - закриття модалки
    //     close();
    //   })
    //   .catch(error => {
    //     Notiflix.Notify.failure(`Failed to add amount of water: ${error.message}`);
    //   });
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
