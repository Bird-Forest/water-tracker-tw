import styled from 'styled-components';
import theme from '../../../BasicStyle/themeJSX.jsx';

export const Frame = styled.div`
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
    width: 656px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 544px;
    height: 680px;
  }
`;
export const StyledMonthStatsTable = styled.div`
display: flex;
flex-direction: column;
`
export const MonthNav = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const MonthTitle = styled.h2`
  color: ${theme.colors.primaryDark};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`;

export const Button = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;

  .nav {
    width: 14px;
    height: 14px;
    fill:${theme.colors.primaryAccent};
  }

  &:disabled {
    fill: ${theme.colors.secondaryBlue};
    cursor: not-allowed;
  }
`;


export const DaysContainer = styled.div`
width: 100%;

display: flex;
flex-wrap: wrap;

column-gap: 26px;
row-gap: 16px;

@media screen and (min-width: 768px) {
  column-gap: 34px;
  row-gap: 20px;
  column-gap: 34px;
}
@media screen and (min-width: 1440px) {
  column-gap: 22px;
}
`;

export const DayCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Popup = styled.div`
display: none;
flex-direction: column;
gap: 16px;
width: 20px;
position: absolute;
bottom: 54px;
background-color:${theme.colors.primaryLight};
border-radius: 10px;
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
padding: 24px 13px;
transform-origin: bottom;
z-index: 2;

@media screen and (max-width: 767px) {
  left: ${props => -7 - props.$deltaNum}px;
}

@media screen and (min-width: 768px) {
  right: ${props => (props.$delta ? '17px' : '')};
  left: ${props => (props.$delta ? '' : '17px')};
  padding: 24px 16px;
  width: 292px;
  bottom: 58px;
}

@media screen and (min-width: 1440px) {
  bottom: 56px;
}

h3 {
  color: ${theme.colors.primaryAccent};
  font-size: '16px';
  line-height: calc(20 / 16);
  margin: 0;
}
p {
  color: ${theme.colors.primaryDark};
  font-size: '16px';
  line-height: calc(20 / 16);
  span {
    color: ${theme.colors.primaryAccent};
    font-size: '18px';
    font-weight: 500;
    line-height: calc(24 / 18);
  }
`;

export const Day = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background-color: ${theme.colors.primaryLight};
display: flex;
align-items: center;
justify-content: center;
outline: ${props =>
  props.$isOutlineVisible ? `1px solid ${theme.colors.secondaryYellow}` : 'none'};
cursor: pointer;
font-size: 14px;
line-height: 18px;

&:hover ${Popup} {
  display: block;
  top:-200px;
}


@media screen and (min-width: 768px) {
  gap: 34px;
  row-gap: 20px;
  width: 34px;
  height: 34px;
}
`;

export const DayPercent = styled.span`
  color: ${theme.colors.secondaryBlue};

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`;



export const StyledMonthWrapper = styled.div`
color: ${theme.colors.primaryAccent};
display: flex;
align-items: center;
justify-content: center;
`
export const Month = styled.span`
  font-size: 16px;
  line-height: 20px;
`;
