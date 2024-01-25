import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigateWrap } from './Navigate.styled';

export default function NavigatePages() {
  // const { isLoggedIn } = useAuth();

  return (
    <NavigateWrap>
      <NavLink className="navigate" to="/">
        WelcomePagee
      </NavLink>
      <NavLink className="navigate" to="/signin">
        SigninPage
      </NavLink>
      <NavLink className="navigate" to="/signup">
        SignupPage
      </NavLink>
      <NavLink className="navigate" to="/home">
        HomePage
      </NavLink>
    </NavigateWrap>
  );
}
