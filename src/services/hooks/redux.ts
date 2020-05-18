import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { IReduxStore } from 'services/redux';

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

export const useActionCallback = <T extends (...args: any[]) => any>(
  action: T
) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) => () => {
    dispatch(action(...args));
  };
};
