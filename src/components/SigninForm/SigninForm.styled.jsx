import styled from 'styled-components';
import theme from '../../BasicStyle/themeJSX';

export const SignInContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 20px;
  padding: 24px 20px;
  @media screen and (min-width: 320px) {

  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {

  }

  div.error-message {
    color: ${theme.colors.secondaryRed};
    font-size: 14px;
    font-weight: 400px;
    position: absolute;
    top: calc(100% + 2px);
  }
`;

export const SignInTitle = styled.strong`
  font-size: 24px;
`;

export const SignInForm = styled.form`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 280px;
  margin-top: 16px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const FormInput = styled.input.attrs((props) => ({
  'data-has-error': props['data-has-error'],
}))`
  padding: 10px;
  border: 1px solid ${(props) => (props['data-has-error'] ? '#EF5050' : '#D7E3FF')};
  border-radius: 6px;
`;

export const ShowPasswordIcon = styled.span`
  /* Стилі для іконки показу/приховування пароля */
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const SignInButton = styled.button`
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
`;

export const SignUpLink = styled.a`
  grid-column-start: 1;
  grid-column-end: 3;
  display: inline-block;
  margin-top: 16px;
  text-decoration: none;
  color: ${theme.colors.primaryAccent};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.secondaryYellow};
  }
`;

export const ForgotPasswordLink = styled.a`
  grid-column-start: 1;
  grid-column-end: 3;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: ${theme.colors.primaryAccent};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.secondaryYellow};
  }
`;
