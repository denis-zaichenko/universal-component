import React from 'react';

import { Item, ISelectItemProps } from './select-item';
import { Placeholder } from '../select-placeholder';

import { ITextStyled } from 'themes';

export interface ISelectTextItemProps extends ISelectItemProps {
  textStyled?: ITextStyled;
}

export const TextItem = (props: ISelectTextItemProps) => {
  const { value, children, className, textStyled } = props;

  return (
    <Item value={value} className={className}>
      <Placeholder selectItem={value} textStyled={textStyled} />
      {children}
    </Item>
  );
};
