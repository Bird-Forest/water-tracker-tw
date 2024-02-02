import React, { Suspense } from 'react';
import Navigator from './Navigator';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export default function SharedLayout() {
  return (
    <>
      <Navigator />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
