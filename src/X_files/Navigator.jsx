// import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigator() {
  // const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" />

      <NavLink to="/signin" />

      <NavLink to="/signup" />

      {/* {isLoggedIn && <NavLink to="/home" />} */}

      <NavLink to="/home" />
      {/* <NavLink to="*" /> */}
    </nav>
  );
}

// {
//   /* <NavLink to="/forgot-password" /> */
// }
