import { useUpdateState } from 'services';

interface ISelectStateData {
  isOpen: boolean;
}

export interface ISelectState extends ISelectStateData {
  setOpen: (isOpen: boolean) => void;
}

const initialState: ISelectStateData = {
  isOpen: false,
};

export const useSelect = (): ISelectState => {
  const [state, updateState] = useUpdateState<ISelectStateData>(initialState);

  const setOpen = (isOpen: boolean) => updateState({ isOpen });

  return { ...state, setOpen };
};
