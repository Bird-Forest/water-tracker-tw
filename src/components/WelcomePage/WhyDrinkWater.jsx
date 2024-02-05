import React from 'react';
import {
  ItemList,
  TitleWrap,
  WrapContRight,
  WrapListRight,
} from './Welcome.styled';

export default function WhyDrinkWater() {
  return (
    <WrapContRight>
      <TitleWrap>Why drink water</TitleWrap>
      <WrapListRight>
        <ItemList>Supply of nutrients to all organs</ItemList>
        <ItemList>Providing oxygen to the lungs</ItemList>
        <ItemList>Maintaining the work of the heart</ItemList>
        <ItemList>Release of processed substances</ItemList>
        <ItemList>Ensuring the stability of the internal environment</ItemList>
        <ItemList>Maintaining within the normal temperature</ItemList>
        <ItemList>
          Maintaining an immune system capable of resisting disease
        </ItemList>
      </WrapListRight>
    </WrapContRight>
  );
}
