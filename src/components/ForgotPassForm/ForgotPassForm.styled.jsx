import styled from 'styled-components';
import theme from '../../BasicStyle/themeJSX';

export const ForgotPasswordContainer = styled.div`
  padding: 24px 0;
  grid-column-start: 1;
  grid-column-end: 3;

  @media screen and (min-width: 768px) {
    padding: 40px 0 0 0;
  }

  @media screen and (min-width: 1440px) {
    transform: translateY(-25%);
    grid-column-start: 8;
    grid-column-end: 12;
  }

  div.error-message {
    color: ${theme.colors.secondaryRed};
    font-size: 12px;
    font-weight: 400px;
    position: absolute;
    top: calc(100% + 2px);

    @media screen and (min-width: 768px) {
      font-size: 13px;
    }
  }
`;

export const ForgotPasswordTitle = styled.strong`
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const ForgotPasswordForm = styled.form`
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
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid ${theme.colors.secondaryLightBlue};
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  color: ${theme.colors.primaryAccent};

  &.error {
    border: 1px solid ${theme.colors.primaryAccent};
    color: ${theme.colors.secondaryRed};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ForgotPasswordButton = styled.button`
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
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#8F8F8F' : '#407BFF')};
    color: ${(props) => (props.disabled ? '#FFFFFF' : '#FF9D43')};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const BackToSignInLink = styled.a`
  display: inline-block;
  text-decoration: none;
  width: fit-content;
  color: ${theme.colors.primaryAccent};
  cursor: pointer;
  margin-top: 16px;
  position: relative;
  padding-bottom: 1px;
  font-size: 16px;
  transition: color 0.3s ease;

  &:before{
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.secondaryYellow};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.secondaryYellow};
  }

  &:hover::before {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
