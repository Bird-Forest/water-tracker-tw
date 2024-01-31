import styled from 'styled-components';

import WaterMainPage from '../img/BgMainPage/WaterMainPage.svg';
import WaterMainTablet from '../img/BgMainPage/WaterMainTablet.svg';
import WaterMainMobile from '../img/BgMainPage/WaterMainMobile.svg';

import BackgroundMobileDrops from '../img/BackgroundHomePage/BackgroundMobileDrops.png';
import BackgroundTabletDrops from '../img/BackgroundHomePage/BackgroundTabletDrops.png';
import BackgroundDesktopDrops from '../img/BackgroundHomePage/BackgroundDesktopDrops.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
export const WrapHeader = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  margin: 0;
  padding: 0;
  background-color: #e3f2fd;
`;
export const WrapRender = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  margin: 0;
  padding: 0;
  background-image: url(${WaterMainMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    background-image: url(${WaterMainTablet});
  }
  @media only screen and (min-width: 1200px) {
    background-image: url(${WaterMainPage});
    // background-size: 100vw;
  }
`;

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  background-image: url(${BackgroundMobileDrops});
  background-repeat: no-repeat;
  background-position-y: 98px;
  background-position-x: center;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    background-image: url(${BackgroundTabletDrops});
    background-position-y: 24px;
    background-size: 768px 1280px;
  }
  @media only screen and (min-width: 1440px) {
    background-image: url(${BackgroundDesktopDrops});
    background-position-y: 61px;
    background-size: 1404px 582px;
  }
`;
