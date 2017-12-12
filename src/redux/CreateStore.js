/* @flow */
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import reducers from './Reducers';

interface History {
  new(): History;
  prototype: History;
}

export default function (initialState: Object = {}): Promise<any> {
  return new Promise((resolve) => {
    const persistOptions = {
      blacklist: ['routing']
    };

    const enhancers = compose(
      applyMiddleware(thunk, routerMiddleware(browserHistory)),
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const store = createStore(reducers, initialState, enhancers);
    // HMR
    if (__DEV__ && module.hot) {
      module.hot.accept('./Reducers', () => {
        store.replaceReducer(reducers);
      });
    }

    const history: History = syncHistoryWithStore(browserHistory, store);
    persistStore(store, persistOptions, () => resolve({ store, history }));
  });
}
