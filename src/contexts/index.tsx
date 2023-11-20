import { type PropsProviders } from 'types';

import AuthContextProvider from './auth';

export const ContextProviders = ({children}: PropsProviders) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
