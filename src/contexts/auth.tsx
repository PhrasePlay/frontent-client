import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from 'storage';
import { type PropsProviders } from 'types';

const AuthContext = createContext({} as any);

const AuthContextProvider = ({ children }: PropsProviders) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkIsAuthenticated = () => {
    getToken() ? setIsAuthenticated(true) : navigate('/login');
  };

  const changeIsAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider
      value={{ checkIsAuthenticated, isAuthenticated, changeIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
