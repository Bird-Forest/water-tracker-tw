import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
// import { updateWaterRateThunk } from '../../redux/auth/operations';

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
  const [gender, setGender] = useState('girl');
  const [weight, setWeight] = useState('');
  const [activeTraningHours, setActiveTraningHours] = useState('');
  const [dailyVol, setDailyVol] = useState('1.8');
  const [volGoal, setVolGoal] = useState('');

  const { user } = useSelector(selectUser);
  // const dispatch = useDispatch();

  const calculateWaterVol = useCallback(() => {
    if (!weight) return;
    const factor = gender === 'girl' ? 0.03 : 0.04;
    const activityFactor = gender === 'girl' ? 0.4 : 0.6;
    const volume = (
      weight * factor +
      activeTraningHours * activityFactor
    ).toFixed(1);
    setDailyVol(volume);
  }, [gender, weight, activeTraningHours]);

  useEffect(() => {
    calculateWaterVol();

    if (user) {
      setGender(user.gender || 'female');
    }
  }, [calculateWaterVol, user]);

  const handleSave = async () => {
    //! *temporary entry to avoid the error message:*
    // eslint-disable-next-line no-unused-vars
    const userData = {
      gender,
      weight,
      activeTraningHours,
      dailyVol,
    };
    // dispatch(updateWaterRateThunk({ waterRateData })); //* waterRate
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
                onChange={e => setVolGoal(e.target.value)}
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
