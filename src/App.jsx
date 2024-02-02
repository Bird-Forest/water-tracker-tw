import React, { Suspense, useEffect } from 'react';
import { useAuth } from 'hooks';
import AppBar from './pages/AppBar';
import { Container } from 'pages/Pages.styled';
import { useDispatch } from 'react-redux';
import { GlobalStyles } from './BasicStyle/GlobalStyles';
import { refreshUser } from './redux/auth/operations';
import PageRoutes from './X_files/PageRoutes';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyles />
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <PageRoutes />
        </Suspense>
      </Container>
    </>
  );
};
