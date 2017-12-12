import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import createStore from './redux/CreateStore';

async function initApp() {
  const { store, history } = await createStore();
  render(
    <App store={store} history={history} />,
    document.getElementById('root')
  );
}

initApp();

// HMR
if (module.hot) {
  module.hot.accept('./App', initApp);
}
