import NavigatePages from 'components/NavigatePages';
import React from 'react';
import { Header } from './Pages.styled';

export default function AppBar() {
  return (
    <Header>
      <NavigatePages />
    </Header>
  );
}
