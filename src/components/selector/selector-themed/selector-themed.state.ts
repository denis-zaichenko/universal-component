import { useUpdateState } from 'services/hooks';

export interface ISelectorStateParameter {
  isOpen: boolean;
}

export interface ISelectorState {
  setOpen(isOpen: boolean): () => void;
  setValue(value: IItem): void;
}

const INITIAL_STATE: ISelectorStateParameter = {
  isOpen: false,
};

export const useSelectorThemed = () => {
  const { state, updateState, updateFieldCallback } = useUpdateState(
    INITIAL_STATE
  );

  const onToggleOpen = () => updateState((data) => ({ isOpen: !data.isOpen }));

  return {
    ...state,

    onToggleOpen,
    updateFieldCallback,
  };
};
