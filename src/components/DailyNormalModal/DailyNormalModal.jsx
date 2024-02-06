import React, { useState, useEffect, useCallback } from 'react';
import Notiflix from 'notiflix';
import { paramsForNotify } from '../../redux/notifications';
import { useDispatch, useSelector } from 'react-redux';
import { updateWaterRate } from '../../redux/auth/operations';
import { selectUser, selectDailyNorma } from '../../redux/auth/selectors';

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
  ResultText,
  ResultValue,
  HowMuchYouWant,
  SubmitButton,
} from './DailyModal.styled';

const DailyNormalModal = ({ closeModal }) => {
  const { gender: userGender } = useSelector(selectUser);

  const dailyNorma = useSelector(selectDailyNorma);
  // console.log('dailyNorma...', dailyNorma);
  const [gender, setGender] = useState(userGender || 'female');
  const [weight, setWeight] = useState('');
  const [activeTraningHours, setActiveTraningHours] = useState('');
  const [dailyVol, setDailyVol] = useState(dailyNorma || '1.8');
  const [volGoal, setVolGoal] = useState('');

  const dispatch = useDispatch();

  const calculateWaterVol = useCallback(() => {
    if (!weight) return;

    const factor = gender === 'female' ? 0.03 : 0.04;
    const activityFactor = gender === 'female' ? 0.4 : 0.6;
    const volume = (
      weight * factor +
      activeTraningHours * activityFactor
    ).toFixed(1);
    setDailyVol(volume);
  }, [gender, weight, activeTraningHours]);

  useEffect(() => {
    calculateWaterVol();
  }, [calculateWaterVol, volGoal]);

  const handleVolGoalChange = e => {
    const newVolGoal = e.target.value;
    setVolGoal(newVolGoal >= 1 ? newVolGoal : '');
  };

  const handleSave = e => {
    e.preventDefault();
  
    // Конвертація рядкових значень у числа
    const parsedWeight = parseFloat(weight);
    const parsedActiveTraningHours = parseFloat(activeTraningHours);
    const parsedVolGoal = parseFloat(volGoal);
  
    // Перевірка чи значення коректні
    if (isNaN(parsedWeight) || isNaN(parsedActiveTraningHours)) {
      Notiflix.Notify.warning('Please enter valid numeric values for weight and active training hours.', paramsForNotify);
      return;
    }
  
    // Перевірка чи введено значення для цілі обсягу, якщо так, то чи є воно числовим
    if (volGoal && isNaN(parsedVolGoal)) {
      Notiflix.Notify.warning('Please enter a valid numeric value for the volume goal.', paramsForNotify);
      return;
    }
  
    // Відправлення запиту на сервер з числовими значеннями
    dispatch(updateWaterRate(parsedVolGoal ? parsedVolGoal : dailyVol))
      .then(() => {
        Notiflix.Notify.success('The goal was successfully set! Track your progress!', paramsForNotify);
        closeModal();
      })
      .catch(error => {
        Notiflix.Notify.failure(`Failed to hydrate: ${error.message}`, paramsForNotify);
      });
  };
  
  return (
    <DailyNormWrap>
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
          <BlueText>*</BlueText> V is the volume of the water norm in liters per
          day, M is your body weight, T is the time of active sports, or another
          type of activity commensurate in terms of loads (in the absence of
          these, you must set 0)
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
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <span>For girl</span>
              </LabelGender>

              <LabelGender>
                <FormRadioInput
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
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
                min="0"
                max="300"
                placeholder="kg"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </QuestionLabel>
          </BoxForm>
          <BoxForm>
            <QuestionLabel>
              <QuestionText>
                Time of active participation in sports or other activities with
                a high physical load:
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
            <ResultText>
              The required amount of water in liters per day:{' '}
            </ResultText>
            <ResultValue>{dailyVol} L</ResultValue>
          </FormResult>

          <BoxForm>
            <QuestionLabel>
              <HowMuchYouWant>
                Write down how much water you will drink:
              </HowMuchYouWant>
              <Input
                type="number"
                placeholder="L"
                value={volGoal}
                onChange={handleVolGoalChange}
              />
            </QuestionLabel>
          </BoxForm>
          <SubmitButton onClick={handleSave}>Save</SubmitButton>
        </form>
      </CalcBox>
    </DailyNormWrap>
  );
};

export default DailyNormalModal;
