type TUpdateState<T> = (data: ((s: T) => Partial<T>) | Partial<T>) => void;
