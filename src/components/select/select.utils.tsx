import React from 'react';

import { TextItem, ItemIcon, ISelectItemWithIconProps } from './components';

export type TCreateSelectItem = string | ISelectItemWithIconProps;

const isSelectItem = (item: TSelectItem): item is ISelectItem =>
  typeof item === 'object' && !!item.value;

export const isIconItem = (props: any): props is ISelectItemWithIconProps =>
  props.icon && props.value;

export const createItemList = (items: TCreateSelectItem[]) =>
  items.map((item, index) => {
    if (typeof item === 'string') return <TextItem key={index} value={item} />;
    if (isIconItem(item)) return <ItemIcon key={index} {...item} />;
    return <TextItem key={index} {...item} />;
  });

export const selectItemToString = (
  item: TSelectItem,
  defaultText?: string
): string =>
  isSelectItem(item)
    ? item.label ?? item.value.toString()
    : item.toString() || defaultText || '';

const isEqualSelectItem = (first: TSelectItem, second: TSelectItem): boolean =>
  (isSelectItem(first) &&
    isSelectItem(second) &&
    first.value === second.value) ||
  (typeof first === typeof second && first === second);

const updateSelectItemArray = (
  item: TSelectItem,
  selectItems: TSelectItem[]
) => {
  const element = selectItems.find((el) => isEqualSelectItem(el, item));
  return !element
    ? [...selectItems, item]
    : selectItems.filter((el) => el !== item);
};

export const updateSelectItem = (
  setSelectElement: (itemsList: TSelectItem | TSelectItem[]) => void,
  item: TSelectItem,
  itemList: TSelectItem | TSelectItem[]
) => {
  const value = Array.isArray(itemList)
    ? updateSelectItemArray(item, itemList)
    : item;
  setSelectElement(value);
};
