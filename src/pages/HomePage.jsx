// import Buttons from 'components/Modal/Buttons';
import React from 'react';
import { StyledHomePage } from './WrapHomePage.styled';
import { WrapperHomePage } from './Pages.styled';
import { SectionWaterConfig } from 'components/SectionWaterConfig/SectionWaterConfig';

export default function HomePage() {
  return (
    <WrapperHomePage>
      <StyledHomePage>
        <SectionWaterConfig />
        <div>Today and calendar</div>
      </StyledHomePage>
    </WrapperHomePage>
  );
}
