// import Buttons from 'components/Modal/Buttons';
import React from 'react';
import { StyledHomePage } from './WrapHomePage.styled';
import { SectionWaterConfig } from 'components/SectionWaterConfig/SectionWaterConfig';

export default function HomePage() {
  return (
    <StyledHomePage>
      <SectionWaterConfig />
      <div>Today and calendar</div>
    </StyledHomePage>
  );
}
