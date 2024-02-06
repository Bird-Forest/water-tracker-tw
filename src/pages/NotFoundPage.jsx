import React from 'react';
import { WrapRender } from './Pages.styled';
import { TitleNotFound, WrapText } from './WrapNotFound.styled';

export default function NotFoundPage() {
  return <WrapRender><WrapText><TitleNotFound>Not found page</TitleNotFound></WrapText></WrapRender>;
}
