import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/auth/operations';
import {
  ForgotPasswordContainer,
  ForgotPasswordTitle,
  ForgotPasswordForm,
  FormLabel,
  FormInput,
  ForgotPasswordButton,
  BackToSignInLink,
} from './ForgotPassForm.styled';

const ForgotPassForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(forgotPassword(values));
    },
  });

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordTitle>Forgot Password</ForgotPasswordTitle>
      <ForgotPasswordForm onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="email">
          Enter your email
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? 'error' : ''
            }
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </FormLabel>
        <ForgotPasswordButton type="submit" disabled={!formik.isValid}>
          Send Reset Request
        </ForgotPasswordButton>
      </ForgotPasswordForm>
      <BackToSignInLink as={Link} to="/signin">
        Sign in
      </BackToSignInLink>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassForm;
