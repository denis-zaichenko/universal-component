import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { IReduxStore, TActions } from 'services/redux';
import { ThunkDispatch } from 'redux-thunk';

/**
 *! mapStateToProps hook analog
 */
export const useReduxSelector: TypedUseSelectorHook<IReduxStore> = useSelector;

/**
 * Dispatch one action
 * @param action Any action creator
 */
export const useAction = <T extends (...args: any[]) => any>(action: T) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) => {
    dispatch(action(...args));
  };
};
export const useWrappedAction = <T extends (...args: any[]) => any>(
  action: T
) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) => () => {
    dispatch(action(...args));
  };
};

export const useReduxDispatch = () => {
  const dispatch = useDispatch();

  const callAction = <T extends (...args: any[]) => any>(action: T) => (
    ...args: Parameters<T>
  ) => {
    dispatch(action(...args));
  };

  const callActionCallback = <T extends (...args: any[]) => any>(action: T) => (
    ...args: Parameters<T>
  ) => () => {
    dispatch(action(...args));
  };

  const thunkDispatch = dispatch as ThunkDispatch<IReduxStore, {}, TActions>;

  return {
    callAction,
    callActionCallback,
    thunkDispatch,
  };
};
