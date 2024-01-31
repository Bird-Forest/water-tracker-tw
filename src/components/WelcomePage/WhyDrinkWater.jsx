import React from 'react';
import { TitleWrap, WrapContRight, WrapListRight } from './Welcome.styled';

export default function WhyDrinkWater() {
  return (
    <WrapContRight>
      <TitleWrap>Why drink water</TitleWrap>
      <WrapListRight style={{ listStyleType: 'circle' }}>
        <li className="text">Supply of nutrients to all organs</li>
        <li className="text">Providing oxygen to the lungs</li>
        <li className="text">Maintaining the work of the heart</li>
        <li className="text">Release of processed substances</li>
        <li className="text">
          Ensuring the stability of the internal environment
        </li>
        <li className="text"> Maintaining within the normal temperature</li>
        <li className="text">
          Maintaining an immune system capable of resisting disease
        </li>
      </WrapListRight>
    </WrapContRight>
  );
}
