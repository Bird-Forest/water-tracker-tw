import styled from 'styled-components';
import BackgroundDesktopDrops from '../../img/BackgroundDesktopDrops.png';

export const StyledHomePage = styled.section`
  display: flex;
  column-gap: 32px;

  padding: 20px 0 40px 0;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 1380px;
    height: 570px;
    position: absolute;
    top: 49px;
    left: -76px;

    background-image: url(${BackgroundDesktopDrops});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .wrapper {
    padding: 30px 0 16px 0;
  }
`;
