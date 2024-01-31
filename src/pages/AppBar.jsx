import React from 'react';

import HeaderComponent from 'components/Header/Header';
import { WrapHeader } from './Pages.styled';

export default function AppBar() {
  return (
    <WrapHeader>
      <HeaderComponent />
    </WrapHeader>
  );
}