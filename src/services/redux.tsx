import React, { FC } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const win = window as any;
const ENABLE_REDUX_DEV_TOOLS =
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__();
const PERSIST_CONFIG = {
  key: 'career-simulator',
  storage,
};

const rootReducer = combineReducers({}) as any;

const reducer = persistReducer(PERSIST_CONFIG, rootReducer);

export const REDUX_STORE = createStore(reducer, ENABLE_REDUX_DEV_TOOLS);

export const PERSISTOR = persistStore(REDUX_STORE);

export interface IReduxStore {}

export const ReduxProvider: FC = ({ children }) => (
  <Provider store={REDUX_STORE}>
    <PersistGate loading={null} persistor={PERSISTOR}>
      {children}
    </PersistGate>
  </Provider>
);
