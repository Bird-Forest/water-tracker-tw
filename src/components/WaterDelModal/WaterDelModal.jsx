import React from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import {
  deleteWaterEntry,
  getDailyWaterAmount,
} from '../../redux/tracker/operations';

import {
  ModalWrap,
  TextStyle,
  ButtonBox,
  Button,
} from './WaterDelModal.styled';

export const WaterDelModal = ({ waterId, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWaterEntry(waterId))
      .then(() => {
        Notiflix.Notify.success('Record deleted successfully');
        dispatch(getDailyWaterAmount());
        closeModal();
      })
      .catch(error => {
        Notiflix.Notify.failure(`Failed to delete: ${error.message}`);
      });
    closeModal();
  };

  return (
    <ModalWrap>
      <TextStyle>Are you sure you want to delete the entry?</TextStyle>
      <ButtonBox>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={closeModal}>Cancel</Button>
      </ButtonBox>
    </ModalWrap>
  );
};
