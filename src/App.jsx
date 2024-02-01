import React, { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import AppBar from 'pages/AppBar';
import { Container } from 'pages/Pages.styled';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './BasicStyle/GlobalStyles';
import { refreshUser } from './redux/auth/operations';
import Loader from 'components/Loader/Loader';

const Welcome = lazy(() => import('pages/WelcomePage'));
const SignIn = lazy(() => import('pages/SigninPage'));
const SignUp = lazy(() => import('pages/SignupPage'));
const ForgotPassPage = lazy(() => import('pages/ForgotPassPage'));
const Home = lazy(() => import('pages/HomePage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>Refreshing user...</b>;
  }

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyles />
      <Container>
        <AppBar />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassPage />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="home" element={isLoggedIn ? <Home /> : <Navigate to="/signin" replace />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
