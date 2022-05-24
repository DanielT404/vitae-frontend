import { Provider } from 'react-redux'
import AppWrapper from './app-wrapper'

import Theme from '../utils/contexts/Theme'
import store from './store'
import { useState } from 'preact/hooks'

function App() {
    const [theme, setTheme] = useState('dark')
    return (
        <Theme.Provider value={{ theme, setTheme }}>
            <Provider store={store}>
                <AppWrapper />
            </Provider>
        </Theme.Provider>
    )
}

export default App
