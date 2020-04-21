type TUpdateState<T> = (data: ((s: T) => Partial<T>) | Partial<T>) => void;

type TPrimitive = string | number;

interface ISelectItem<T = TPrimitive> {
  value: T;
  label?: string;
}

type TSelectItem<T = TPrimitive> = ISelectItem<T> | T;
