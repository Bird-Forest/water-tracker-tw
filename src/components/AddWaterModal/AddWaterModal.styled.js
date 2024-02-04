import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '../../img/plus.svg';
import { ReactComponent as MinusIcon } from '../../img/minus.svg';
import theme from '../../BasicStyle/themeJSX';

export const StyledAddWaterModal = styled.div`
  width: 100vw;
  max-width: 280px;
  @media only screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 592px;
  }
`;

export const AddWater = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`;

export const ChooseText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`;

export const AmountText = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  gap: 7px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    padding: 10px;

    gap: 10px;

    border-radius: 30px;
    border: 1px solid ${theme.colors.secondaryBlue};
    background: ${theme.colors.primaryLight};

    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 36px;

    padding: 6px 10px;
    gap: 10px;

    border-radius: 40px;
    background: ${theme.colors.secondaryLightBlue};
    color: ${theme.colors.primaryAccent};

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  stroke: ${theme.colors.primaryAccent};
`;

export const StyledMinusIcon = styled(MinusIcon)`
  stroke: ${theme.colors.primaryAccent};
  fill: ${theme.colors.primaryAccent};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    display: flex;
    align-items: flex-start;

    /* width: 120px; */
    gap: 10px;
    padding: 12px 10px;
    margin-bottom: 24px;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${theme.colors.secondaryBlue};

    appearance: none;

    color: ${theme.colors.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
    text-align: left;
  }

  label:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export const ButtonSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: ${theme.colors.primaryAccent};
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 10px 30px;

    outline: none;
    border-radius: 10px;
    border: none;

    color: ${theme.colors.primaryLight};
    background: ${theme.colors.primaryAccent};

    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;

    transition: background-color ${theme.animation.duration}
        ${theme.animation.cubicBezier},
      box-shadow ${theme.animation.duration} ${theme.animation.cubicBezier};
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;
