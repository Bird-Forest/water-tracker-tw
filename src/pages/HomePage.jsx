// import Buttons from 'components/Modal/Buttons';
import React from 'react';
import { StyledHomePage } from './WrapHomePage.styled';
import { SectionWaterConfig } from 'components/SectionWaterConfig/SectionWaterConfig';
import { SectionTodayMonth } from 'components/SectionTodayMonth/SectionTodayMonth';

export default function HomePage() {
  return (
    <StyledHomePage>
      <SectionWaterConfig />
		<SectionTodayMonth/>
    </StyledHomePage>
  );
}
