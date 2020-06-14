/**
 * Wrapped default Object.entries with hard typing.
 *
 * @template T - object type
 * @param {T} object - Object what need transform to array form [key, value] item.
 */
export const entriesObject = <T extends {}>(object: T) =>
  Object.entries(object) as [keyof T, T[keyof T]][];

/**
 * Wrapped default Object.keys with hard typing where all item value is keyof object.
 *
 * @template T - object type
 * @param {T} object - Object what transform to array with key of it.
 */
export const keyofObject = <T extends {}>(object: T) =>
  Object.keys(object) as (keyof T)[];

/**
 *  Wrapped default Object.values with hard typing where all item value is type of field(not unknown in default).
 *
 * @template T - object type
 * @param {T} object - Object what transform to array with values of it.
 */
export const valuesOfObject = <T extends {}>(object: T) =>
  Object.values(object) as T[keyof T][];
