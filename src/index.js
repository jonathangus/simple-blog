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

if ('serviceWorker' in navigator && __PROD__) { // eslint-disable-line
  // eslint-disable-line
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/static/sw.js');
  });
}

// HMR
if (module.hot) {
  module.hot.accept('./App', initApp);
}
