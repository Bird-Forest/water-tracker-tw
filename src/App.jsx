import React, { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import AppBar from 'pages/AppBar';
import { Container } from 'pages/Pages.styled';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';

const Welcome = lazy(() => import('pages/WelcomePage'));
const SignIn = lazy(() => import('pages/SigninPage'));
const SignUp = lazy(() => import('pages/SignupPage'));
const Home = lazy(() => import('pages/HomePage/HomePage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
