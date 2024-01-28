import React from 'react';
import { WrapperHomePage } from './Pages.styled';
import { StyledHomePage } from './HomePage.styled';
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
