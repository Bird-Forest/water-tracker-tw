import styled from 'styled-components';
import theme from '../../../BasicStyle/themeJSX.jsx';
const { duration } = theme.animation;
const { cubicBezier } = theme.animation;

export const IconWrapper = styled.div`
  svg {
    width: 26px;
    height: 26px;
    fill: ${theme.colors.primaryAccent};
    margin-right: 12px;
  }
`;

export const TodayStyledDiv = styled.div`
  min-width: 264px;
  max-height: 258px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;

export const TodayStyle = styled.h2`
  margin: 0 0 16px 0;
  text-align: left;
  color: ${theme.colors.primaryDark};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const ListAddDiv = styled.div`
  width: inherit;
  max-height: 212px;
  @media screen and (min-width: 768px) {
    height: 260px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const UlStyle = styled.ul`
  height: 212px;
  overflow-y: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 5px;
    background: ${theme.colors.secondaryLightBlue};
    border-radius: 50px;
    border: 1px solid ${theme.colors.secondaryLight};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondaryBlue};
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primaryAccent};
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 38px;

  // height: 36px;

  padding: 12px 0 12px 0;
  margin: 0 4px 0 0;
  border-bottom: 1px solid ${theme.colors.secondaryLightBlue};
`;

export const InfoWrap = styled.div`
  // width: 166px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 26px;
    height: 26px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media only screen and (min-width: 1440px) {
    }
    & use {
      /* x: 5px;
      y: 2px; */
      fill: ${theme.colors.primaryAccent};
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const TextVolume = styled.p`
  color: ${theme.colors.primaryAccent};
  font-size: 18px;
  line-height: 1.33;
  margin: 0 12px 0 0;

  @media screen and (min-width: 768px) {
    margin: 0 16px 0 0;
  }
`;

export const TextTime = styled.p`
  color: ${theme.colors.primaryDark};
  font-size: 12px;
  line-height: 2;
`;

export const EditBtn = styled.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color ${duration} ${cubicBezier};
  color: ${theme.colors.secondaryBlue};

  &:hover,
  &:focus {
    border-bottom: 1px solid ${theme.colors.secondaryBlue};
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color ${duration} ${cubicBezier};
  color: ${theme.colors.secondaryRed};

  &:hover,
  &:focus {
    border-bottom: 1px solid ${theme.colors.secondaryRed};
    cursor: pointer;
  }
`;

export const AddBtnStyle = styled.button`
  display: flex;
  gap: 8px;
  padding: 12px 0 0 0;
  color: ${theme.colors.primaryAccent};
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: color ${duration} ${cubicBezier};

  & svg {
    width: 16px;
    height: 16px;
    & use {
      fill: ${theme.colors.primaryAccent};
      transition: fill ${duration} ${cubicBezier};
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${theme.colors.secondaryYellow};
    & use {
      fill: ${theme.colors.secondaryYellow};
    }
  }
`;

export const StyledLi = styled.li`
  list-style: none;
`;


export const StyledQuestion = styled.p`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 18px;
    font-weight: 500;
    line-height: 133.3%;


`