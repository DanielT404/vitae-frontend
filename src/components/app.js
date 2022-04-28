import { Provider } from 'react-redux'
import store from './store'

import AppWrapper from './app-wrapper'

function App() {
    return (
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    )
}

export default App
