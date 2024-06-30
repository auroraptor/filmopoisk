import { useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';

interface AuthCheckerProps {
  children: ReactNode;
}

const AuthChecker: React.FC<AuthCheckerProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthChecker;
