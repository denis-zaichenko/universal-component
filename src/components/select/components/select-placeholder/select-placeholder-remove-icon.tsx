import React, { FC } from 'react';

import { Image, TImageNames } from 'components/image';
import { Placeholder, ISelectPlaceholderProps } from './select-placeholder';

import { useSelectContext } from '../../select.context';
import { updateSelectItem } from '../../select.utils';

import { TMouseEvent } from 'typings';

import { Theme } from 'themes';

export interface IRemoveIcon {
  type: TImageNames;
  size?: string;
}

export interface ISelectPlaceholderWithRemoveProps
  extends ISelectPlaceholderProps {
  className?: string;
  removeIcon?: IRemoveIcon;
  itemGap?: string;
}

export const PlaceholderWithRemove: FC<ISelectPlaceholderWithRemoveProps> = (
  props
) => {
  const {
    className,
    children,
    removeIcon,
    selectItem: item,
    placeholder,
    itemGap,
  } = props;
  const { onSelect, selectItem } = useSelectContext();

  const handler: TMouseEvent = (e) => {
    e.stopPropagation();
    updateSelectItem(onSelect, item, selectItem);
  };

  return (
    <Theme.Flexbox
      justifyContent="space-between"
      alignItem="center"
      itemGap={itemGap}
    >
      <Placeholder
        selectItem={item}
        placeholder={placeholder}
        className={className}
      />
      {children}
      {removeIcon && (
        <Image
          onClick={handler}
          type={removeIcon.type}
          size={removeIcon.size ?? '1.25em'}
        />
      )}
    </Theme.Flexbox>
  );
};
