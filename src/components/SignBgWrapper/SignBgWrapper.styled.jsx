import styled from 'styled-components';
import bg_1x from './bg/bg-mobile-1x.png';
import bg_2x from './bg/bg-mobile-2x.png';

export const SignBgWrapperStyled = styled.div`
  min-height: calc(100vh - 56px);
  picture {
    position: absolute;
    bottom: 20px;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 320px) {
    background-image: url(${bg_1x});
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: contain;
  }

  @media screen and (min-width: 320px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bg_2x});
  }

  @media screen and (min-width: 768px){
    picture {
      position: absolute;
      right: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    picture {
      left: 0;
    }
  }
`;
