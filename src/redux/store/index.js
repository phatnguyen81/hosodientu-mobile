import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import rootSaga from '../sagas';

import rootReducer from '../reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
  );
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(...[sagaMiddleware, middleware]),
          window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
      : applyMiddleware(...[sagaMiddleware, middleware]),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
