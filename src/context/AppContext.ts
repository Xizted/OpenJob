import { createContext } from 'react';

interface ContextProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
const AppContext = createContext({} as ContextProps);
export default AppContext;
