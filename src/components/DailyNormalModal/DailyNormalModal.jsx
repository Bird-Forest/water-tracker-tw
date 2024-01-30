import React, { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';

import {
  DailyNormWrap,
  Title,
  GenderWrap,
  Gender,
  BlueText,
  BoxTextNote,
  NoteText,
  CalcBox,
  BoxForm,
  FormName,
  ChooseGender,
  LabelGender,
  FormRadioInput,
  QuestionLabel,
  QuestionText,
  Input,
  FormResult,
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

        <GenderWrap>
          <Gender>
            For girl:
            <BlueText>V=(M*0,03) + (T*0,4)</BlueText>
          </Gender>

          <Gender>
            For man:
            <BlueText>V=(M*0,04) + (T*0,6)</BlueText>
          </Gender>
        </GenderWrap>

        <BoxTextNote>
          <NoteText>
            <BlueText>*</BlueText> V is the volume of the water norm in liters
            per day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
          </NoteText>
        </BoxTextNote>

        <CalcBox>
          <form>
            <BoxForm>
              <FormName>Calculate your rate:</FormName>

              <ChooseGender>
                <LabelGender>
                  <FormRadioInput
                    type="radio"
                    name="gender"
                    value="girl"
                    checked={gender === 'girl'}
                    onChange={() => setGender('girl')}
                  />
                  <span>For girl</span>
                </LabelGender>

                <LabelGender>
                  <FormRadioInput
                    type="radio"
                    name="gender"
                    value="boy"
                    checked={gender === 'boy'}
                    onChange={() => setGender('boy')}
                  />
                  <span>For boy</span>
                </LabelGender>
              </ChooseGender>
            </BoxForm>

            <BoxForm>
              <QuestionLabel>
                <QuestionText>Your weight in kilograms:</QuestionText>
                <Input
                  type="number"
                  placeholder="kg"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                />
              </QuestionLabel>
            </BoxForm>

            <BoxForm>
              <QuestionLabel>
                <QuestionText>
                  Time of active participation in sports or other activities
                  with a high physical load:
                </QuestionText>

                <Input
                  type="number"
                  placeholder="Time in hours"
                  value={activeTraningHours}
                  onChange={e => setActiveTraningHours(e.target.value)}
                />
              </QuestionLabel>
            </BoxForm>

            <FormResult>
              The required amount of water in liters per day:{' '}
              <strong>{dailyVol} L</strong>
            </FormResult>

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
