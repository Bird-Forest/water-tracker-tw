import React from 'react';
import { WrapMain, WrapMainContent } from './Welcome.styled';
import WaterСonsumptionTracker from './WaterСonsumptionTracker';
import WhyDrinkWater from './WhyDrinkWater';

export default function Main() {
  return (
    <WrapMain>
      <WrapMainContent>
        <WaterСonsumptionTracker />
        <WhyDrinkWater />
      </WrapMainContent>
    </WrapMain>
  );
}
