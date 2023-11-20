import { Logo } from 'config';
import { useAuthContext } from 'contexts/auth';
import { useEffect } from 'react';

export const Splash = () => {
  const { checkIsAuthenticated } = useAuthContext();

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <img className="h-80" src={Logo} />
    </div>
  );
};
