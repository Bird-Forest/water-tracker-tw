import styled from 'styled-components';
// const MainPageDecktop = '../img/MainPageDecktop.png';
import WaterMainPage from '../img/BgMainPage/WaterMainPage.svg';
import WaterMainTablet from '../img/BgMainPage/WaterMainTablet.svg';
import WaterMainMobile from '../img/BgMainPage/WaterMainMobile.svg';

import bg_mob from '../img/bg/mob-bg.svg';
import bg_tab from '../img/bg/tab-bg.svg';
// import bg_desk from '../img/bg/desk-bg.svg';
import bg_desk_elem from '../img/bg/desk-elem-bg.svg';

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
  height: 8vh;
  margin: 0;
  padding: 0;
`;

export const WrapRender = styled.div`
  display: flex;
  width: 100%;
  height: 92vh;
  margin: 0;
  padding: 0;
  background-position: top;
  background-image: url(${bg_desk_elem});

  @media screen and (min-width: 320px) {
    // background-image: url(${bg_mob});

    /* background-position-x: center;
    background-position-y: 108px; */
    /* background-size: cover; */
  }

  @media screen and (min-width: 768px) {
    // background-image: url(${bg_tab});
    /* background-position-y: 90px; */
    /* background-repeat: no-repeat;
     */
  }

  @media screen and (min-width: 1200px) {
    // background-image: url(${bg_desk_elem});
    /* background-position-y: center; */
    // background-repeat: repeat;
  }
`;
export const WrapWelcomePage = styled.div`
  display: flex;
  width: 100vw;
  height: 93vh;
  margin: 0;
  padding: 0;
  background-image: url(${WaterMainMobile});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    background-image: url(${WaterMainTablet});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  @media only screen and (min-width: 1200px) {
    background-image: url(${WaterMainPage});
    background-position: bottom;
  }
`;
