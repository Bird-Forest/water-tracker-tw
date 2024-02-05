import styled from 'styled-components';
import theme from '../../BasicStyle/themeJSX';

export const WrapMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 20px;
  margin: 0;
  width: 100vw;
  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 210px 0 210px;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
  }
`;
export const TitleMain = styled.h1`
  // display: flex;
  // justify-content: flex-start;
  // align-items: flex-start;
  text-align: start;
  overflow-wrap: normal;
  color: #2f2f2f;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  margin: 0 0 16px 0;
  padding: 0;
`;

export const WrapMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const WrapLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: 0;
`;

export const SubtitleMain = styled.h2`
  font-size: 24px;
  font-style: normal;
  color: black;
  font-weight: 400;
  line-height: 1.25;
`;
export const WrapContLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const WrapBenefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const TitleWrap = styled.h3`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11;
`;

export const WrapItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  .text {
    width: 176px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
  }
  .icon-item {
    width: 32px;
    height: 32px;
    stroke: #407bff;
  }
  @media screen and (min-width: 768px) {
    .icon-item {
      width: 40px;
      height: 40px;
    }
  }
`;
export const BtnTryTracker = styled.button`
  display: inline-block;
  min-width: 280px;
  height: 36px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  background: ${theme.colors.primaryAccent};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  // cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  // background-color: ${({ disabled }) => (disabled ? '#8F8F8F' : '#407BFF')};
  color: ${theme.colors.primaryLight};
  border: none;
  margin: 0;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 768px) {
    width: 384px;
  }
`;

export const WrapContRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  border-radius: 10px;
  background: #ecf2ff;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 16px;
  margin: 0;
  @media screen and (min-width: 1200px) {
    margin-top: 72px;
  }
`;
export const WrapListRight = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
`;
export const ItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 0;
  margin: 0;
  &::before {
    content: '';
    background-color: #407bff;
    color: #407bff;
    padding: 0 8px 0 0;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin: 0 8px 0 0;
  }
`;
