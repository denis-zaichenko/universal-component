import React, { FC } from 'react';

import { Item, ISelectItemProps } from './select-item';
import { Placeholder } from '../select-placeholder';

export const TextItem: FC<ISelectItemProps> = (props) => {
  const { value, children, className } = props;

  return (
    <Item value={value} className={className}>
      <Placeholder selectItem={value} />
      {children}
    </Item>
  );
};
