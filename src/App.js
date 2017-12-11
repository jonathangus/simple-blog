/* @flow */
import React from 'react';
import { Provider, Store } from 'react-redux';
import AppRouter from './AppRouter';

type AppProps = {
  store: Store,
  history: History
}

const App = (props: AppProps) => (
  <Provider store={props.store}>
    <AppRouter history={props.history} />
  </Provider>
);


export default App;
