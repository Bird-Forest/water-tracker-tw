import Calendar from './Calendar/Calendar';
import { StyledSectionTodayMonth } from './SectionTodayMonth.styled';
import TodayWaterList from './TodayWaterList/TodayWaterList';

export const SectionTodayMonth = () => {
  return (
    <StyledSectionTodayMonth>
      <TodayWaterList />
      <Calendar/>
    </StyledSectionTodayMonth>
  );
};
