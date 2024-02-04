import styled from 'styled-components';
import theme from '../../../BasicStyle/themeJSX.jsx';

export const StyledMonthStatsTable = styled.div`
  display: flex;
  flex-direction: column;
`;
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
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const Button = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;

  .nav {
    width: 14px;
    height: 14px;
    fill: ${theme.colors.primaryAccent};
  }

  &:disabled {
    fill: ${theme.colors.secondaryBlue};
    cursor: not-allowed;
  }
`;

export const DaysContainer = styled.div`
  position: relative;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Popup = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 188px;
  position: absolute;
  top: 0;
  transform: translate(0, -100%);
  transition: all 0.2s ease-in-out;

  background-color: ${theme.colors.primaryLight};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    position: fixed;
    left: ${props => props.x - 140}px;
    top: ${props => props.y - 35}px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 16px;
    width: 292px;
  }

  @media screen and (min-width: 1440px) {
  }

  h3 {
    color: ${theme.colors.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
    margin: 0;
  }
  p {
    color: ${theme.colors.primaryDark};
    font-size: 16px;
    line-height: 1.25;
  }
  span {
    color: ${theme.colors.primaryAccent};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`;

export const Day = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${props =>
    props.$isOutlineVisible
      ? `1px solid ${theme.colors.secondaryYellow}`
      : 'none'};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover ${Popup} {
    display: flex;
  }

  @media (min-width: 768px) {
    &:hover ${Popup}.right {
      left: auto;
      right: 100%;
      top: -10%;
    }

    &:hover ${Popup}.left {
      left: 100%;
      right: auto;
      top: -10%;
    }
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
  line-height: 1.6;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 1.54;
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const StyledMonthWrapper = styled.div`
  color: ${theme.colors.primaryAccent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
`;
export const Month = styled.span`
  font-size: 16px;
  line-height: 20px;
`;
