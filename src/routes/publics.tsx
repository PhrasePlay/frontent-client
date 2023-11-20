import { Login, Splash } from 'pages';

export const publicsRouter = [
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
