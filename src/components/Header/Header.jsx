import React from 'react';
import UserAuth from './UserAuth';
import UserLogo from './UserLogo';
import HeaderLogo from './HeaderLogo';
import { HeaderContainer } from './Header.styled';
import { useAuth } from 'hooks';

const HeaderComponent = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer>
      <HeaderLogo />
      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </HeaderContainer>
  );
};

export default HeaderComponent;
