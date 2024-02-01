import React from 'react';
import HeaderComponent from 'components/Header/Header';
import { WrapHeader } from './Pages.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../src/redux/auth/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <WrapHeader>
      <HeaderComponent isAuthenticated={isLoggedIn} />
    </WrapHeader>
  );
}
