import { getItemAsync } from 'expo-secure-store';
import { useEffect, useState } from 'react';
import AppContext from './AppContext';
interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    getItemAsync('token').then((token) => setToken(token));
  }, []);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
