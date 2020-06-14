type TUpdateState<T> = (data: ((s: T) => Partial<T>) | Partial<T>) => void;

type TSetField<O extends {}, K = keyof O> = (option: K, value: any) => void;

//! Get object with action-creator and combine to one type
type TCombiner<T> = T extends { [key: string]: infer U } ? U : never;
type TReducer<S, A> = (state: S, action: A) => S | null;

// * React hook type
// Just test how it work and you amazing
type TUpdateField<O extends {}> = <K extends keyof O>(
  option: K
) => (value: O[K]) => void;

type TUpdateFieldCallback<O extends {}> = <K extends keyof O>(
  option: K
) => (value: O[K]) => () => void;

type TUpdateStateData<T> = Partial<T> | ((state: T) => Partial<T>);
