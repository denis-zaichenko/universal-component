import React, { FC } from 'react';

import { Select, ISelectProps } from '../select';

import { ISelectTextHeaderProps } from './select-header';
import { ISelectMenuProps } from './select-menu';

type TSelectorExtends = ISelectProps &
  ISelectTextHeaderProps &
  ISelectMenuProps;

export interface ISelectorProps extends TSelectorExtends {
  className?: string;
}

export const Selector: FC<ISelectorProps> = (props) => {
  const {
    className,
    onSelect,
    selectItem,
    children,
    removeIcon,
    itemList,
    topGap,
  } = props;

  return (
    <Select onSelect={onSelect} selectItem={selectItem} className={className}>
      <Select.HeaderText removeIcon={removeIcon} />
      <Select.Menu itemList={itemList} topGap={topGap} />
      {children}
    </Select>
  );
};
