import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const middlewares = [];

const store = compose(
  applyMiddleware(...middlewares),
)(createStore)(rootReducer);

if (__DEV__ && module.hot) {
  module.hot.accept('../reducers', () => {
    store.replaceReducer(require('../reducers')); // eslint-disable-line global-require
  });
}

export default store;
