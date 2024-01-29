import { useState } from 'react';
// import Modal from 'components/Modal/Modal';
import { ModalWindow } from '../ModalWindow/ModalWindow';

import {
  DailyNormWrap,
  BoxTextNote,
  Title,
  Gender,
  BlueText,
  NoteText,
  CalcBox,
  BoxForm,
  LabelGender,
} from './DailyModal.styled';

const DailyNormalModal = ({ closeModal }) => {
  const [gender, setGender] = useState('girl');
  const [weight, setWeight] = useState('');
  const [activeTraningHours, setActiveTraningHours] = useState('');
  const [dailyVol, setDailyVol] = useState('1.8');
  const [volGoal, setVolGoal] = useState('');

  const calculateWaterVol = () => {
    const factor = gender === 'girl' ? 0.03 : 0.04;
    const activityFactor = gender === 'girl' ? 0.4 : 0.6;
    const vol = (weight * factor + activeTraningHours * activityFactor).toFixed(
      1
    );
    setDailyVol(vol);
  };

  const handleSave = async () => {
    calculateWaterVol();

    //! *temporary entry to avoid the error message:*
    // eslint-disable-next-line no-unused-vars
    const userData = {
      gender,
      weight,
      activeTraningHours,
      dailyVol,
    };
  };

  return (
    <DailyNormWrap>
      <ModalWindow closeModal={closeModal}>
        <Title>My daily norma</Title>

        <Gender>
          For girl:
          <BlueText>V=(M*0,03) + (T*0,4)</BlueText>
        </Gender>

        <Gender>
          For man:
          <BlueText>V=(M*0,04) + (T*0,6)</BlueText>
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

        <CalcBox>
          <form>
            <BoxForm>
              <h4>Calculate your rate:</h4>
              <LabelGender>
                <input
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={gender === 'girl'}
                  onChange={() => setGender('girl')}
                />
                For girl
              </LabelGender>
              <LabelGender>
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  checked={gender === 'man'}
                  onChange={() => setGender('man')}
                />
                For boy
              </LabelGender>
            </BoxForm>

            <BoxForm>
              <p>Your weight in kilograms:</p>
              <input
                type="number"
                placeholder="kg"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </BoxForm>

            <BoxForm>
              <p>
                Time of active participation in sports or other activities with
                a high physical load:
              </p>
              <input
                type="number"
                placeholder="Time in hours"
                value={activeTraningHours}
                onChange={e => setActiveTraningHours(e.target.value)}
              />
            </BoxForm>

            <BoxForm>
              The required amount of water in liters per day:{' '}
              <strong>{dailyVol} L</strong>
            </BoxForm>

            <BoxForm>
              <p>Write down how much water you will drink:</p>
              <input
                type="number"
                placeholder="L"
                value={volGoal}
                onChange={e => setVolGoal(e.target.value)}
              />
            </BoxForm>

            <button onClick={handleSave}>Save</button>
          </form>
        </CalcBox>
      </ModalWindow>
    </DailyNormWrap>
  );
};

export default DailyNormalModal;
