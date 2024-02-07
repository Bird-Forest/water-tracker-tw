import { SignBgWrapperStyled, SignInSection } from './SignBgWrapper.styled';

import imgDesk from './bg/bottle-desk-1x.webp';
import imgDesk2x from './bg/bottle-desk-2x.webp';
import imgTablet from './bg/bottle-tab-1x.webp';
import imgTablet2x from './bg/bottle-tab-2x.webp';
import imgMob from './bg/bottle-mob-1x.webp';
import imgMob2x from './bg/bottle-mob-2x.webp';
import imgDeskPng from './bg/bottle-desk-1x.png';
import imgDeskPng2x from './bg/bottle-desk-2x.png';
import imgTabletPng from './bg/bottle-tab-1x.png';
import imgTabletPng2x from './bg/bottle-tab-2x.png';
import imgMobPng from './bg/bottle-mob-1x.png';
import imgMobPng2x from './bg/bottle-mob-2x.png';

const SignBgWrapper = ({ children }) => {
  return (
    <SignInSection className={'sign-section-container'}>
      <SignBgWrapperStyled className={'sign-bg-wrapper'}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${imgDesk} 1x, ${imgDesk2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${imgDeskPng} 1x, ${imgDeskPng2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgTabletPng} 1x, ${imgTabletPng2x} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imgMob} 1x, ${imgMob2x} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imgMobPng} 1x, ${imgMobPng2x} 2x`}
            type="image/png"
          />
          <img src={imgDeskPng} alt="RespPicture" />
        </picture>
        {children}
      </SignBgWrapperStyled>
    </SignInSection>
  );
};

export default SignBgWrapper;
