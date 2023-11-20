import { Route, Routes } from 'react-router-dom';

import { publicsRouter, privatesRouter } from './routes';
import { useAuthContext } from 'contexts/auth';

function App() {
  const { isAuthenticated } = useAuthContext();
  return (
    <Routes>
      {isAuthenticated
        ? privatesRouter.map((route, index) => <Route key={index} {...route} />)
        : publicsRouter.map((route, index) => <Route key={index} {...route} />)}
    </Routes>
  );
}

export default App;
