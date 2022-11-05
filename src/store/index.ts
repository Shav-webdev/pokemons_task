import {
  createStore,
  applyMiddleware,
  compose,
  AnyAction,
  Dispatch,
  Middleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "store/sagas";

import createRootReducers from "store/reducers";
import "regenerator-runtime/runtime";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const makeStore = () => {
  const middleware: Middleware<{}, any, Dispatch<AnyAction>>[] = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store: any = createStore(
    createRootReducers(),
    process.env.NODE_ENV !== "production"
      ? composeEnhancers(applyMiddleware(...middleware))
      : applyMiddleware(...middleware),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default makeStore();
