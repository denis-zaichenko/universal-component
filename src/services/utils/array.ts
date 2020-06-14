interface IUpdateParameter<T extends any> {
  array: T[];
  newValue: T;
  limit?: number;
}
interface IUpdateListParameter<T extends any> extends IUpdateParameter<T> {
  index: number;
}
interface IUpdateObjectArrayParameters<T extends {}, K extends keyof T>
  extends IUpdateParameter<T> {
  field: K;
}

const removeItem = <T extends any>(array: T[], index: number) => {
  const clone = [...array];
  clone.splice(index, 1);
  return clone;
};

const updateArray = <T extends any>(params: IUpdateListParameter<T>) => {
  const { array, index, newValue, limit } = params;
  if (typeof limit !== 'number') {
    return index === -1 ? [...array, newValue] : removeItem(array, index);
  }
  if (limit >= array.length && index === -1) {
    return [...array, newValue];
  }
  return removeItem(array, index);
};

export const updatePrimitiveArray = <T extends TPrimitive>(
  params: IUpdateParameter<T>
) => {
  const { array, newValue, limit } = params;
  const index = array.indexOf(newValue);
  return updateArray({ array, newValue, index, limit });
};

export const updateObjectArray = <T extends {}, K extends keyof T>(
  params: IUpdateObjectArrayParameters<T, K>
) => {
  const { array, field, newValue, limit } = params;
  const index = array.findIndex((item) => item[field] === newValue[field]);
  return updateArray({ array, newValue, index, limit });
};

export const isIncludeInArray = <T extends TPrimitive>(
  array: T[] | T,
  item: T
) => (Array.isArray(array) ? array.indexOf(item) !== -1 : array === item);

export const getRandomItem = <T extends any>(array: T[]): T =>
  array[Math.ceil(Math.random() * array.length) - 1];

export const sortAlphabeticalObjectArray = <T extends {}>(
  array: T[],
  field: keyof T
) => array.sort((a, b) => (a[field] < b[field] ? -1 : 1));
