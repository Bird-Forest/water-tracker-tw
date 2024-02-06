import theme from 'BasicStyle/themeJSX';
import styled from 'styled-components';

export const StyledSectionTodayMonth = styled.div`
  margin-bottom: 40px;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;
  background: ${theme.colors.secondaryLight};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px 24px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    /* margin-top: 80px; */
    /* width: 592px; */
    height: 680px;
  }
`;
