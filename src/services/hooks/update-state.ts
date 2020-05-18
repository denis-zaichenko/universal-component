import { useState } from 'react';

export type TSetField<O extends {}> = (option: keyof O) => (value: any) => void;
export type TSetFieldCallback<O extends {}> = (
  option: keyof O
) => (value: any) => () => void;

type TData<T> = Partial<T> | ((state: T) => Partial<T>);

export const useUpdateState = <T extends {}>(initState: T) => {
  const [state, setState] = useState<T>(initState);

  const updateState = (data: TData<T>) =>
    setState((s) => ({
      ...s,
      ...(typeof data === 'function' ? data(s) : data),
    }));

  const updateField: TSetField<T> = (option) => (value) =>
    updateState({ [option]: value } as Partial<T>);

  const updateFieldCallback: TSetField<T> = (option) => (value) => () =>
    updateState({ [option]: value } as Partial<T>);

  return { ...state, updateState, updateField, updateFieldCallback };
};
