import React from 'react';

import HeaderComponent from 'components/Header/Header';
import { WrapHeader } from './Pages.styled';
// import Buttons from 'components/WrapperModal/Buttons';

export default function AppBar() {
  return (
    <WrapHeader>
      <HeaderComponent />
    </WrapHeader>
  );
}
