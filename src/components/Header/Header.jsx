import React from 'react';
import UserAuth from './UserAuth';
// import UserLogo from './UserLogo';
import HeaderLogo from './HeaderLogo';
import { HeaderContainer, Navigation } from './Header.styled';
// import NavigatePages from './NavigatePages';

const HeaderComponent = () => (
  <HeaderContainer>
    <div className="container">
      <Navigation>
        <HeaderLogo />
        {/* <NavigatePages /> */}
        <UserAuth />
        {/* <UserLogo /> */}
      </Navigation>
    </div>
  </HeaderContainer>
);

export default HeaderComponent;
