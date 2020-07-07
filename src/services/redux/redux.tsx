import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { REDUX_STORE, PERSISTOR } from './redux-middleware';

export const ReduxProvider: FC = (props) => (
  <Provider store={REDUX_STORE}>
    <PersistGate loading={null} persistor={PERSISTOR}>
      {props.children}
    </PersistGate>
  </Provider>
);
