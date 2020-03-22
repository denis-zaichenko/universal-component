import React from 'react';

import {
  TextItem,
  ItemIcon,
  ISelectTextItemProps,
  ISelectItemWithIconProps,
  isIconItem,
} from './components';

import { ISelectItem } from './select.typings';

export type TSelectItem =
  | string
  | ISelectTextItemProps
  | ISelectItemWithIconProps;

export const createItemList = (items: TSelectItem[]) =>
  items.map((item: TSelectItem) => {
    if (typeof item === 'string')
      return <TextItem key={item} value={{ value: item }} />;
    if (isIconItem(item)) return <ItemIcon key={item.value.value} {...item} />;
    return <TextItem key={item.value.value} {...item} />;
  });

export const updateSelectItems = (
  item: ISelectItem,
  selectItems: ISelectItem[]
) =>
  selectItems.some((el) => el.value === item.value)
    ? selectItems.filter((el) => el.value !== item.value)
    : [...selectItems, item];

export const selectItemToString = (
  { value, label }: ISelectItem,
  defaultText?: string
): string => label || value || defaultText || '';
