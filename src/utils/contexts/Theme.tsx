import { createContext } from 'preact';

const Theme = createContext({
  theme: 'dark',
  setTheme: (theme: string) => {}
});
export default Theme;
