import styled from 'styled-components';
import theme from '../../BasicStyle/themeJSX';

export const ForgotPasswordContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.primaryLight};
`;

export const ForgotPasswordTitle = styled.strong`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &.error {
    /* Стилі для інпутів з помилкою */
    border: 1px solid red;
  }
`;

export const ForgotPasswordButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;

export const BackToSignInLink = styled.a`
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
`;
