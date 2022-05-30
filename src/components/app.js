import { h } from 'preact';
import { useState } from 'preact/hooks';

import { Provider } from 'react-redux';
import store from 'components/store';

import Theme from 'utils/contexts/Theme';
import AppWrapper from 'components/app-wrapper';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </Theme.Provider>
  );
}

export default App;
