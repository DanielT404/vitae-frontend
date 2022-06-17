import { h } from 'preact';
import { Provider } from 'react-redux';
import store from 'components/store';

import { useState } from 'preact/hooks';

import AppWrapper from 'components/app-wrapper';
import Theme from 'utils/contexts/Theme';

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
