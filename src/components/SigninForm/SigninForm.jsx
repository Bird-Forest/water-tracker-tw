import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
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
} from './SigninForm.styled';

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </ShowPasswordIcon>
        </FormLabel>

        <SignInButton type="submit" disabled={!formik.isValid}>
          Sign In
        </SignInButton>
      </SignInForm>
      <SignUpLink as={Link} to="/signup">Sign Up</SignUpLink>
      <ForgotPasswordLink as={Link} to="/forgotpassword">Forgot password?</ForgotPasswordLink>
    </SignInContainer>
  );
};

export default SigninForm;