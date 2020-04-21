import React from 'react';

import { Icon, TIconNames } from 'components/icons';
import { Placeholder, ISelectPlaceholderProps } from './select-placeholder';

import { useSelectContext } from '../../select.context';
import { updateSelectItem } from '../../select.utils';

import { FComponent, TMouseEvent } from 'typings';

import { Theme } from 'themes';

export interface IRemoveIcon {
  type: TIconNames;
  size?: string;
}

export interface ISelectPlaceholderWithRemoveProps
  extends ISelectPlaceholderProps {
  removeIcon?: IRemoveIcon;
  itemGap?: string;
}

export const PlaceholderWithRemove: FComponent<ISelectPlaceholderWithRemoveProps> = (
  props
) => {
  const {
    className,
    children,
    removeIcon,
    selectItem: item,
    placeholder,
    textStyled,
    itemGap,
  } = props;
  const { onSelect, selectItem } = useSelectContext();

  const handler: TMouseEvent = (e) => {
    e.stopPropagation();
    updateSelectItem(onSelect, item, selectItem);
  };

  return (
    <Theme.FlexList
      justifyContent="space-between"
      alignItem="center"
      itemGap={itemGap}
    >
      <Placeholder
        selectItem={item}
        placeholder={placeholder}
        textStyled={textStyled}
        className={className}
      />
      {children}
      {removeIcon && (
        <Icon
          onClick={handler}
          type={removeIcon.type}
          size={removeIcon.size ?? '1.25em'}
        />
      )}
    </Theme.FlexList>
  );
};
