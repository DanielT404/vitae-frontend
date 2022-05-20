import { Provider } from 'react-redux'
import AppWrapper from './app-wrapper'

import Theme from '../utils/contexts/Theme'
import store from './store'

function App() {
    return (
        <Theme.Provider value="dark">
            <Provider store={store}>
                <AppWrapper />
            </Provider>
        </Theme.Provider>
    )
}

export default App
