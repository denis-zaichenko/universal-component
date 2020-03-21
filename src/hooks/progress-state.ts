import { useState } from 'react';

export const useProgressState = <T = object>(initState: T) => {
  const [state, setState] = useState<T>(initState);

  const updateState = (data: Partial<T> | ((state: T) => Partial<T>)) => {
    setState((s) => {
      if (typeof data === 'function') return { ...s, ...data(s) };
      return { ...s, ...data };
    });
  };

  return [state, updateState] as const;
};
