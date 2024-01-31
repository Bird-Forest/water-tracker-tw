import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import zxcvbn from 'zxcvbn';
import PasswordStrengthMeter from '../PassStrengthMeter/PasswordStrengthMeter';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
    onSubmit: async ({ email, password }) => {
      try {
        await dispatch(register({ email, password }));
        // Викликаємо функцію логінування після успішної реєстрації
        await dispatch(logIn({ email, password }));
      } catch (error) {
        console.log(error);
        // Обробка помилок реєстрації, відображення повідомлення користувачу
      }
    },
  });

  if (isLoggedIn) {
    // Якщо користувач вже авторизований, перенаправити його на home
    return <Navigate to="/home" />;
  }

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
        <FormLabel htmlFor="email">Enter your email
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
        </FormLabel>
        <FormLabel htmlFor="password">Enter your password
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
