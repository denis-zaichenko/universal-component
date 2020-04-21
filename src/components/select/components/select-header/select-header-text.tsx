import React from 'react';

import { PlaceholderWithRemove, IRemoveIcon } from '../select-placeholder';
import { Header, ISelectHederProps } from './select-header';

import { useSelectContext } from '../../select.context';

import { ITextStyled } from 'themes';
import { FComponent } from 'typings';

type THederExtends = ISelectHederProps;
export interface ISelectTextHeaderProps extends THederExtends {
  textStyled?: ITextStyled;
  removeIcon?: IRemoveIcon | boolean;
}

export const HeaderText: FComponent<ISelectTextHeaderProps> = (props) => {
  const { children, className, textStyled, removeIcon } = props;
  const { selectItem } = useSelectContext();

  const iconPlaceholder: IRemoveIcon | undefined =
    typeof removeIcon === 'boolean' ? { type: 'cross' } : removeIcon;

  const Item = (props: { item: TSelectItem }) => (
    <PlaceholderWithRemove
      removeIcon={iconPlaceholder}
      selectItem={props.item}
      textStyled={textStyled}
    />
  );

  const placeholder = Array.isArray(selectItem) ? (
    selectItem.map((item, index) => <Item key={index} item={item} />)
  ) : (
    <Item item={selectItem} />
  );

  return (
    <Header className={className}>
      {placeholder}
      {children}
    </Header>
  );
};
