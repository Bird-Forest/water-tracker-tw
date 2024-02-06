import React from 'react';
import { WrapRender } from './Pages.styled';
import { TitleNotFound, WrapText } from './WrapNotFound.styled';
// import { useSelector } from 'react-redux';
// import { selectError } from 'redux/tracker/selectors';

export default function NotFoundPage() {
  // const message = useSelector(selectError);
  // console.log(message);
  // message: 'Network Error'
  return (
    <WrapRender>
      <WrapText>
        <TitleNotFound>Not found page</TitleNotFound>
      </WrapText>
    </WrapRender>
  );
}
