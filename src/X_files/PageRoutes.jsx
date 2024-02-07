import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import SharedLayout from './SharedLayout';

const Welcome = lazy(() => import('../pages/WelcomePage'));
const SignIn = lazy(() => import('../pages/SigninPage'));
const SignUp = lazy(() => import('../pages/SignupPage'));
const Home = lazy(() => import('../pages/HomePage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));
const ForgotPassPage = lazy(() => import('../pages/ForgotPassPage'));
const ResetPassPage = lazy(() => import('../pages/ReaetPassPage'));

export default function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Welcome />} />

        <Route
          path="/signin"
          element={<RestrictedRoute redirectTo="/home" component={<SignIn />} />}
        />
        <Route
          path="/signup"
          element={<RestrictedRoute redirectTo="/home" component={<SignUp />} />}
        />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/signin" component={<Home />} />}
        /> 
        <Route
          path="/forgot-password"
          element={<RestrictedRoute redirectTo="/signin" component={<ForgotPassPage />} />}
        /> 
        <Route
          path="/reset-password"
          element={<RestrictedRoute redirectTo="/signin" component={<ResetPassPage />} />}
        /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
