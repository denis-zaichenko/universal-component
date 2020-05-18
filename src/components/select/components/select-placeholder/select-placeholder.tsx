import React, { FC } from 'react';

import { selectItemToString } from '../../select.utils';

import { Theme } from 'themes';

export interface ISelectPlaceholderProps {
  className?: string;
  selectItem: TSelectItem;
  placeholder?: string;
}

export const Placeholder: FC<ISelectPlaceholderProps> = (props) => {
  const { placeholder, selectItem, children, className } = props;

  return (
    <Theme.Text className={className}>
      {selectItemToString(selectItem, placeholder)}
      {children}
    </Theme.Text>
  );
};
