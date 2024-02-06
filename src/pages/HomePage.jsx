// import Buttons from 'components/Modal/Buttons';
import React from 'react';
import { StyledHomePage } from './WrapHomePage.styled';
import { SectionWaterConfig } from 'components/SectionWaterConfig/SectionWaterConfig';
import { SectionTodayMonth } from 'components/SectionTodayMonth/SectionTodayMonth';
import { WrapRender } from './Pages.styled';

export default function HomePage() {
  return (
    <WrapRender>
      <StyledHomePage>
        <SectionWaterConfig />
        <SectionTodayMonth />
      </StyledHomePage>
    </WrapRender>
  );
}
