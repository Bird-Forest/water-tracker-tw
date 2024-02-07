// import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav>
      <NavLink to="/" />

      <NavLink to="/signin" />

      <NavLink to="/signup" />

      <NavLink to="/home" />

      <NavLink to="/forgot-password" />

      <NavLink to="/reset-password:id" />
    </nav>
  );
}
