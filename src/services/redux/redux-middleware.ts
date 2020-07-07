import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage';
import { rootReducer, IReduxStore, TActions } from './reducers';

const PERSIST_CONFIG = {
  key: 'career-simulator',
  storage,
};

const reducer = persistReducer(PERSIST_CONFIG, rootReducer);
const middleware = [thunk as ThunkMiddleware<IReduxStore, TActions>];
const addMiddleware = composeWithDevTools(applyMiddleware(...middleware));

export const REDUX_STORE = createStore(reducer, addMiddleware);

export const PERSISTOR = persistStore(REDUX_STORE);
