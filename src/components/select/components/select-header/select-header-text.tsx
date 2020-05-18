import React, { FC } from 'react';

import { PlaceholderWithRemove, IRemoveIcon } from '../select-placeholder';
import { Header, ISelectHederProps } from './select-header';

import { useSelectContext } from '../../select.context';

export interface ISelectTextHeaderProps extends ISelectHederProps {
  className?: string;
  removeIcon?: IRemoveIcon | boolean;
}

export const HeaderText: FC<ISelectTextHeaderProps> = (props) => {
  const { children, className, removeIcon } = props;
  const { selectItem } = useSelectContext();
  const iconPlaceholder: IRemoveIcon | undefined =
    typeof removeIcon === 'boolean' ? { type: 'cross' } : removeIcon;

  const placeholder = Array.isArray(selectItem) ? (
    selectItem.map((item, index) => (
      <PlaceholderWithRemove
        key={index}
        selectItem={item}
        removeIcon={iconPlaceholder}
      />
    ))
  ) : (
    <PlaceholderWithRemove
      selectItem={selectItem}
      removeIcon={iconPlaceholder}
    />
  );

  return (
    <Header className={className}>
      {placeholder}
      {children}
    </Header>
  );
};
