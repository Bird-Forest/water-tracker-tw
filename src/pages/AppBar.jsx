import NavigatePages from 'components/Header/NavigatePages';
import React from 'react';
import { WrapHeader } from './Pages.styled';

export default function AppBar() {
  return (
    <WrapHeader>
      <NavigatePages />
    </WrapHeader>
  );
}
