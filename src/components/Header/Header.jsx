import React from 'react';
import UserAuth from './UserAuth';
import UserLogo from './UserLogo';
import HeaderLogo from './HeaderLogo';
import { HeaderContainer } from './Header.styled';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer>
      {isLoggedIn ? (
        <Link to="/home">
          <HeaderLogo />
        </Link>
      ) : (
        <Link to="/">
          <HeaderLogo />
        </Link>
      )}
      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </HeaderContainer>
  );
};

export default HeaderComponent;
