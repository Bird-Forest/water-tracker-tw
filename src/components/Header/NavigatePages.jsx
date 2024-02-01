import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { NavigateWrap } from './Navigate.styled';

export default function NavigatePages() {
  const dispatch = useDispatch(); // Додано useDispatch()

  // Додаємо функцію для обробки натискання на кнопку "Logout"
  const handleLogout = () => {
    // Викликаємо дію розлогінювання (logOut)
    dispatch(logOut());
  };

  return (
    <NavigateWrap>
      <NavLink className="navigate" to="/">
        WelcomePage
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
      <NavLink className="navigate" to="/forgot-password">
        ForgotPassPage
      </NavLink>
      <button onClick={handleLogout}>Log out</button> {/* Додаємо обробник натискання */}
    </NavigateWrap>
  );
}
