import React from 'react';
import Modal from 'components/Modal/Modal';

import {
  BoxTextNote,
  Title,
  Gender,
  BlueText,
  NoteText,
} from './DailyNormalModal.styled';

const DailyNormalModal = ({ closeModal }) => {
  return (
    <>
      <Modal closeModal={closeModal}>
        <Title>My daily norma</Title>

        <Gender>
          For girl:
          <BlueText>V=(M*0,03) + (T*0,4)</BlueText>
        </Gender>

        <Gender>
          For man:
          <BlueText>V=(M*0,03) + (T*0,4)</BlueText>
        </Gender>

        <BoxTextNote>
          <BlueText>*</BlueText>
          <NoteText>
            V is the volume of the water norm in liters per day, M is your body
            weight, T is the time of active sports, or another type of activity
            commensurate in terms of loads (in the absence of these, you must
            set 0)
          </NoteText>
        </BoxTextNote>
      </Modal>
    </>
  );
};

export default DailyNormalModal;
