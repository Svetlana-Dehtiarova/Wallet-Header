import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoading = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoading && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
