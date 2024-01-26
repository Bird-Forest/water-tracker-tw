import React from 'react';
import { StyledHomePage } from './HomePage.styled';
import { MyDailyNorma } from 'components/MyDailyNorma/MyDailyNorma';
import { WaterRadioPanel } from 'components/WaterRadioPanel/WaterRadioPanel';

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className='wrapper'>
        <MyDailyNorma />
        <WaterRadioPanel />
      </div>
      <div>Today and calendar</div>
    </StyledHomePage>
  );
}
