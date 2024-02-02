import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

export const RestrictedRoute = ({ children, redirectTo = '/tasks' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};
