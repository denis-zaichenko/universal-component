import React from 'react';

import { Select, ISelectProps } from '../select';

import { FComponent } from 'typings';
import { ISelectTextHeaderProps } from './select-header';
import { ISelectMenuProps } from './select-menu';

export interface ISelectorProps
  extends ISelectProps,
    ISelectTextHeaderProps,
    ISelectMenuProps {}

export const Selector: FComponent<ISelectorProps> = (props) => {
  const {
    className,
    onSelect,
    selectItem,
    flexStyled,
    children,
    removeIcon,
    textStyled,
    itemList,
    topGap,
  } = props;

  return (
    <Select
      onSelect={onSelect}
      selectItem={selectItem}
      flexStyled={flexStyled}
      className={className}
    >
      <Select.HeaderText removeIcon={removeIcon} textStyled={textStyled} />
      <Select.Menu itemList={itemList} topGap={topGap} />
      {children}
    </Select>
  );
};
