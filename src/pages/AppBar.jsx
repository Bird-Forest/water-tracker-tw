import NavigatePages from 'components/Header/NavigatePages';
import React from 'react';
import { WrapHeader } from './Pages.styled';
// import Buttons from 'components/WrapperModal/Buttons';

export default function AppBar() {
  return (
    <WrapHeader>
      <NavigatePages />
      {/* <Buttons /> */}
    </WrapHeader>
  );
}
