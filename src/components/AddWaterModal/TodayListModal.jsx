import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import {
  addWaterEntry,
  updateWaterEntry,
  getDailyWaterAmount,
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

const TodayListModal = ({ isEditing, data, closeModal }) => {
  const [amountWater, setAmountWater] = useState(
    isEditing ? data.amountWater : 0
  );
  const [recordedTime, setRecordedTime] = useState(
    isEditing ? new Date(data.time) : new Date()
  );

  const dispatch = useDispatch();

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

    const saveWater = {
      amountWater: amountWater,
      time: new Date(recordedTime)
    };

    if (isEditing) {
      // Edit mode
      dispatch(updateWaterEntry({ ...saveWater, waterId: data._id }))
        .then(() => {
          Notiflix.Notify.success('Amount of water updated successfully!');
          dispatch(getDailyWaterAmount());
          closeModal();
        })
        .catch(error => {
          Notiflix.Notify.failure(
            `Failed to update amount of water: ${error.message}`
          );
        });
    } else {
      // Add mode
      dispatch(addWaterEntry(saveWater))
        .then(() => {
          Notiflix.Notify.success('Amount of water added successfully!');
          dispatch(getDailyWaterAmount());
          closeModal();
        })
        .catch(error => {
          Notiflix.Notify.failure(
            `Failed to add amount of water: ${error.message}`
          );
        });
    }
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  return (
    <StyledAddWaterModal>
      <AddWater>{title}</AddWater>
      <ChooseText>
        {isEditing && (
          <div>
            <h3>Entered records:</h3>
            <div>
              {amountWater
                ? `${amountWater} at ${recordedTime}`
                : 'No value entered'}
            </div>
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

        <span>{amountWater}ml</span>

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

export default TodayListModal;
