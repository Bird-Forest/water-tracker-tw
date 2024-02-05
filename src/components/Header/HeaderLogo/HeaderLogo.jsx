import React from 'react';
import Icon from '../../../img/main-logo.svg';
import { Logo, LogoIcon, LogoText } from './HeaderLogo.styled';

const HeaderLogo = () => (
  <>
    <Logo>
      <LogoIcon src={Icon} alt="Logo" />
      <LogoText>
        Tracker <br /> of water
      </LogoText>
    </Logo>
  </>
);

export default HeaderLogo;
