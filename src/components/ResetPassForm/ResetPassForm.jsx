import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import zxcvbn from 'zxcvbn';
import PasswordStrengthMeter from '../PassStrengthMeter/PasswordStrengthMeter';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/auth/operations';

import {
  ResetPassContainer,
  ResetPassTitle,
  ResetPasswordForm,
  FormLabel,
  FormInput,
  RepeatPasswordInput,
  ShowPasswordIcon,
  ResetPassButton,
  SignInLink,
} from './ResetPassForm.styled';

const ResetPassForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(0);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
    },
    validate: values => {
      const errors = {};

      if (formik.touched.password && !values.password) {
        errors.password = 'Required';
      } else if (formik.touched.password && values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }

      if (formik.touched.repeatPassword && !values.repeatPassword) {
        errors.repeatPassword = 'Required';
      } else if (
        formik.touched.repeatPassword &&
        values.password !== values.repeatPassword
      ) {
        errors.repeatPassword = 'Passwords do not match';
      }

      return errors;
    },
    onSubmit: async ({ password }) => {
      try {
        await dispatch(resetPassword({ password }));
      } catch (error) {
        console.log(error);
      }
    },
  });


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handlePasswordChange = event => {
    const password = event.target.value;
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
    setPasswordLength(password.length);
  };

  return (
    <ResetPassContainer>
      <ResetPassTitle>Reset Password</ResetPassTitle>
      <ResetPasswordForm onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="password">Enter new password
          <FormInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            onChange={e => {
              formik.handleChange(e);
              handlePasswordChange(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            data-has-error={formik.touched.password && formik.errors.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
          <ShowPasswordIcon onClick={toggleShowPassword}>
            {showPassword ? <FiEyeOff size={16} color="#407BFF" style={{transform: 'rotate(180deg)'}} /> : <FiEye size={16} color="#407BFF" />}
          </ShowPasswordIcon>
          <PasswordStrengthMeter
            strength={passwordStrength}
            showMeter={passwordLength > 0}
          />
        </FormLabel>
        <FormLabel htmlFor="repeatPassword">Repeat password
          <RepeatPasswordInput
            type={showRepeatPassword ? 'text' : 'password'}
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
            data-has-error={
              formik.touched.repeatPassword && formik.errors.repeatPassword
            }
          />
          {formik.errors.repeatPassword && formik.touched.repeatPassword && (
            <div className="error-message">{formik.errors.repeatPassword}</div>
          )}
          <ShowPasswordIcon onClick={toggleShowRepeatPassword}>
            {showRepeatPassword ? <FiEyeOff size={16} color="#407BFF" style={{transform: 'rotate(180deg)'}} /> : <FiEye size={16} color="#407BFF" />}
          </ShowPasswordIcon>
        </FormLabel>
        <ResetPassButton type="submit" disabled={!formik.isValid}>
        Reset Password
        </ResetPassButton>
      </ResetPasswordForm>
      <SignInLink as={Link} to="/signin">
        Sign in
      </SignInLink>
    </ResetPassContainer>
  );
};

export default ResetPassForm;
