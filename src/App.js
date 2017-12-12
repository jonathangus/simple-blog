/* @flow */
import React from 'react';
import { Provider, Store } from 'react-redux';
import AppRouter from './AppRouter';

type Props = {
  store: Store,
  history: History
};

export default class App extends React.Component<Props> {
  componentDidMount() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.remove('loading');
    }
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <AppRouter history={history} />
      </Provider>
    );
  }
}
