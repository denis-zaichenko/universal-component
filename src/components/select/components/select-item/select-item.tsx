import React, { FC } from 'react';

import { useSelectContext } from '../../select.context';
import { updateSelectItem } from '../../select.utils';

import { Theme } from 'themes';

export interface ISelectItemProps {
  value: TSelectItem;
  className?: string;
}

export const Item: FC<ISelectItemProps> = (props) => {
  const { children, value, className } = props;
  const { onSelect, setOpen, selectItem } = useSelectContext();

  const handleSelect = () => {
    setOpen(false);
    updateSelectItem(onSelect, value, selectItem);
  };

  return (
    <Theme.Flexbox className={className} onClick={handleSelect}>
      {children}
    </Theme.Flexbox>
  );
};
