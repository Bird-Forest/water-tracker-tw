import styled from 'styled-components';
// const MainPageDecktop = '../img/MainPageDecktop.png';
import MainPageDecktop from '../img/MainPageDecktop.png';
import BackgroundMobileDrops from '../img/BackgroundHomePage/BackgroundMobileDrops.png';
import BackgroundTabletDrops from '../img/BackgroundHomePage/BackgroundTabletDrops.png';
import BackgroundDesktopDrops from '../img/BackgroundHomePage/BackgroundDesktopDrops.png';

import bg_mob from '../img/bg/mob-bg.svg';
import bg_tab from '../img/bg/tab-bg.svg';
import bg_desk from '../img/bg/desk-bg.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 320px) {
    background-image: url(${bg_mob});
    background-repeat: repeat-y;
    background-position-x: center;
    background-position-y: 108px;
    background-size: contain;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bg_tab});
    background-position-y: 26px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bg_desk});
    background-position-y: center;
    background-repeat: no-repeat;
  }
`;
export const WrapHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  padding: 0;
  background-color: #e3f2fd;
`;
export const WrapRender = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  background-image: url(${MainPageDecktop});
  background-size: 1440px 432px;
  background-repeat: no-repeat;
  background-position: bottom;
  object-fit: cover;
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
