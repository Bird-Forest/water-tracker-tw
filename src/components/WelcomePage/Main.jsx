import React from 'react';
import { TitleMain, WrapMain, WrapMainContent } from './Welcome.styled';
import WaterСonsumptionTracker from './WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater';

export default function Main() {
  return (
    <WrapMain>
      <TitleMain>Water consumption tracker</TitleMain>
      <WrapMainContent>
        <WaterСonsumptionTracker />
        <WhyDrinkWater />
      </WrapMainContent>
    </WrapMain>
  );
}
