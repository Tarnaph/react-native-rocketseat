/* Configs Globais */
import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

/* React */
import React from 'react';

/* Redux-Provider-Persister */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'redux/store';

/* Navigation */
import Routes from 'navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
