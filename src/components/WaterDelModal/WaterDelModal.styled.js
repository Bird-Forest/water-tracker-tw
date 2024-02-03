import styled from 'styled-components';

import theme from '../../BasicStyle/themeJSX';

export const ModalWrap = styled.div`
  padding: 0 24px 32px;
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
