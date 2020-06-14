import { useState } from 'react';

/**
 * Wrapper from default hook useState with some feature
 *
 * @template T - like in standard useState but only object
 * @param {T} initState - initial state from useState
 * @returns {object} state: useState data
 * @returns {function} updateState: ({new sate field} | (oldState) => {new state field})
 * transform default update field state from setState((s) => ({field: newValue})) to updateState({field: newValue})
 * @returns {function} updateField = (fieldName) =>(fieldValue)
 * update single state field by fieldName to fieldValue
 * @returns {function} updateFieldCallback = (fieldName) => (fieldValue) => ()
 * work like a updateField function but return callback-function
 */
export const useUpdateState = <T extends {}>(initState: T) => {
  const [state, setState] = useState<T>(initState);

  const updateState = (data: TUpdateStateData<T>) =>
    setState((s) => ({
      ...s,
      ...(typeof data === 'function' ? data(s) : data),
    }));

  const updateField: TUpdateField<T> = (option) => (value) =>
    updateState({ [option]: value } as any);

  const updateFieldCallback: TUpdateFieldCallback<T> = (option) => (
    value
  ) => () => updateState({ [option]: value } as any);

  return { state, updateState, updateField, updateFieldCallback };
};
