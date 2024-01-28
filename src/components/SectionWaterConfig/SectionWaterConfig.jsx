import { MyDailyNorma } from './MyDailyNorma/MyDailyNorma';
import { StyledSection } from './SectionWaterConfig.styled';
import { WaterRadioPanel } from './WaterRadioPanel/WaterRadioPanel';

export const SectionWaterConfig = () => {
  return (
    <StyledSection>
      <MyDailyNorma />
      <WaterRadioPanel />
    </StyledSection>
  );
};
