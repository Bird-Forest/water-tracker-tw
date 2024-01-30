import styled from 'styled-components';
import theme from '../../BasicStyle/themeJSX';

export const SignUpContainer = styled.div`
  padding: 24px 0;
  grid-column-start: 1;
  grid-column-end: 3;

  @media screen and (min-width: 768px) {
    padding: 40px 0 0 0;
  }

  @media screen and (min-width: 1440px) {
    transform: translateY(-12%);
    grid-column-start: 8;
    grid-column-end: 12;
  }

  div.error-message {
    color: ${theme.colors.secondaryRed};
    font-size: 14px;
    font-weight: 400px;
    position: absolute;
    top: calc(100% + 2px);
  }
`;

export const SignUpTitle = styled.strong`
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const FormInput = styled.input.attrs(props => ({
    'data-has-error': props['data-has-error'],
  }))`
  padding: 10px;
  border: 1px solid ${(props) => (props['data-has-error'] ? '#EF5050' : '#D7E3FF')};
  border-radius: 6px;
  outline: none;
`;

export const RepeatPasswordInput = styled(FormInput)`
  /* Стилі для повторення пароля, використовуйте стилі FormInput та додайте потрібні зміни */
`;

export const ShowPasswordIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 40px;
`;

export const SignUpButton = styled.button`
  border-radius: 10px;
  background: ${theme.colors.primaryAccent};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  padding: 10px 15px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#8F8F8F' : '#407BFF')};
  color: ${theme.colors.primaryLight};
  border: none;
  margin-top: 10px;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#8F8F8F' : '#407BFF')}; /* Змінює колір при наведенні, якщо кнопка активна */
  }
`;

export const SignInLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${theme.colors.primaryAccent};
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    color: ${theme.colors.secondaryYellow};
  }
`;
