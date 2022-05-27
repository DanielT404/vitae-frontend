import { createContext } from 'preact';

const Theme = createContext({
  theme: 'dark',
  setTheme: () => {}
});
export default Theme;
