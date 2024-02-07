import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import {
  SignInContainer,
  SignInTitle,
  SignInForm,
  FormLabel,
  FormInput,
  ShowPasswordIcon,
  SignInButton,
  SignUpLink,
  ForgotPasswordLink,
  LinksWrapper
} from './SigninForm.styled';

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await dispatch(logIn(values));
        // Після успішного логіну можна використати Navigate для переходу на сторінку Home
      } catch (error) {
        console.log(error);
        // Обробка помилок логіну, відображення повідомлення користувачу
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

  return (
    <SignInContainer>
      <SignInTitle>Sign In</SignInTitle>
      <SignInForm onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="email">Enter your email
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            data-has-error={formik.touched.email && formik.errors.email}
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
            onChange={formik.handleChange}
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
        </FormLabel>

        <SignInButton type="submit" disabled={!formik.isValid}>
          Sign In
        </SignInButton>
      </SignInForm>
      <LinksWrapper>
        <SignUpLink as={Link} to="/signup">Sign up</SignUpLink>
        <ForgotPasswordLink as={Link} to="/forgot-password">Forgot password?</ForgotPasswordLink>
      </LinksWrapper>
    </SignInContainer>
  );
};

export default SigninForm;