import styled from 'styled-components';
import WaterMobile from '../../img/BackgroundHomePage/WaterMobile.png';
import WaterTablet from '../../img/BackgroundHomePage/WaterTablet.png';
import WaterDesktop from '../../img/BackgroundHomePage/WaterDesktop.png';

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 434px;

  background-image: url(${WaterMobile});
  background-repeat: no-repeat;
  background-position-y: 82px;
  background-position-x: center;
  background-size: 280px 208px;

  @media only screen and (min-width: 768px) {
    min-height: 501px;
    background-image: url(${WaterTablet});
    background-position-y: top;
    background-size: 518px 386px;
  }
  @media only screen and (min-width: 1440px) {
    height: 680px;
    padding-top: 30px;
    padding-bottom: 16px;
    background-image: url(${WaterDesktop});
    background-size: 738px 548px;
  }
`;
