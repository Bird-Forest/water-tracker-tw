import styled from 'styled-components';

import theme from '../../BasicStyle/themeJSX';

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  width: 100vh;
  max-width: calc(280px - 24px);

  @media only screen and (max-width: 767px) {
    padding: 12px 12px;
  }

  @media only screen and (min-width: 768px) {
    max-width: calc(592px - 48px);
  }
`;

export const TextStyle = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;

  color: primaryDark;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
	align-self: flex-end;
    flex-direction: row-reverse;
  }
`;

export const Button = styled.button`
  display: inline-block;

  width: 100%;
  padding: 8px 30px;
  color: ${theme.colors.primaryLight};
  background-color: ${theme.colors.secondaryRed};

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  cursor: pointer;

  &:last-of-type {
    color: ${theme.colors.primaryAccent};
    background-color: ${theme.colors.secondaryLightBlue};
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
  }
`;
