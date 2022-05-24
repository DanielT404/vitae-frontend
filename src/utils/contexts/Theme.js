import { createContext } from 'preact'

const Theme = createContext({
    theme: 'dark',
    setTheme: (theme) => {},
})
export default Theme
