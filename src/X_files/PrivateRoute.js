import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
// import HomePage from 'pages/HomePage';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   // return isLoggedIn ? children : <Navigate to={redirectTo} replace />;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
