import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import zxcvbn from 'zxcvbn';
import PasswordStrengthMeter from '../PassStrengthMeter/PasswordStrengthMeter';
import {
  SignUpContainer,
  SignUpTitle,
  SignUpForm,
  FormLabel,
  FormInput,
  RepeatPasswordInput,
  ShowPasswordIcon,
  SignUpButton,
  SignInLink,
} from './SignupForm.styled';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validate: values => {
      const errors = {};

      if (formik.touched.email && !values.email) {
        errors.email = 'Required';
      } else if (
        formik.touched.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

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
    onSubmit: values => {
      console.log(values);
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
    <SignUpContainer>
      <SignUpTitle>Sign Up</SignUpTitle>
      <SignUpForm onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="email">Enter your email</FormLabel>
        <FormInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          data-has-error={formik.touched.email && formik.errors.email} // Додаємо властивість data-has-error
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}

        <FormLabel htmlFor="password">Enter your password</FormLabel>
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
          data-has-error={formik.touched.password && formik.errors.password} // Додаємо властивість data-has-error
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
        <ShowPasswordIcon onClick={toggleShowPassword}>
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </ShowPasswordIcon>
        <PasswordStrengthMeter
          strength={passwordStrength}
          showMeter={passwordLength > 0}
        />

        <FormLabel htmlFor="repeatPassword">Repeat password</FormLabel>
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
          {showRepeatPassword ? '👁️' : '👁️‍🗨️'}
        </ShowPasswordIcon>

        <SignUpButton type="submit" disabled={!formik.isValid}>
          Sign Up
        </SignUpButton>
      </SignUpForm>
      <SignInLink as={Link} to="/signin">
        Sign In
      </SignInLink>
    </SignUpContainer>
  );
};

export default SignupForm;
