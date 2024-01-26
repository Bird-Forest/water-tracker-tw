import styled from 'styled-components';
import theme from '../../BasicStyle/themeJSX';

export const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  div.error-message {
    color: ${theme.colors.secondaryRed}; /* Червоний колір для повідомлень про помилки */
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const SignUpTitle = styled.strong`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
`;

export const FormInput = styled.input.attrs(props => ({
    'data-has-error': props['data-has-error'],
  }))`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PasswordStrengthMeter = styled.div`
  /* Стилі для елемента, що показує надійність пароля */
`;

export const RepeatPasswordInput = styled(FormInput)`
  /* Стилі для повторення пароля, використовуйте стилі FormInput та додайте потрібні зміни */
`;

export const ShowPasswordIcon = styled.span`
  cursor: pointer;
  /* Стилі для іконки показу/приховування пароля */
`;

export const SignUpButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#3498db')}; /* Світло-синій колір для вимкненої кнопки, та основний колір для активної */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; /* Змінює курсор на 'not-allowed', якщо кнопка вимкнена */
  outline: none; /* Видаляє стандартний синій обрамлення при активізації кнопки */

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#2980b9')}; /* Змінює колір при наведенні, якщо кнопка активна */
  }

  &:focus {
    /* Додайте стилі для фокусу (необов'язково) */
  }

  &:active {
    /* Додайте стилі для натискання (необов'язково) */
  }
`;

export const SignInLink = styled.a`
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
`;
