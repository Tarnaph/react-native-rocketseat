/* Configs */
import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

/* React */
import React from 'react';

/* Redux */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'redux/store';

/* Apollo & GraphQL */
import { ApolloProvider } from 'react-apollo';
import client from './apollo/client';

/* Routes */
import Routes from 'navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

export default App;
