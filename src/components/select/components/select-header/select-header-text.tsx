import React from 'react';

import { Placeholder } from '../select-placeholder';
import { Header, ISelectHederProps } from './select-header';

import { useSelectContext } from '../../select.context';

import { ITextStyled } from 'themes/styles';

type THederExtends = ISelectHederProps;
export interface ISelectTextHeaderProps extends THederExtends {
  textStyled?: ITextStyled;
}

export const HeaderText = (props: ISelectTextHeaderProps) => {
  const { children, className, textStyled, flexStyled } = props;
  const { selectItem } = useSelectContext();

  const placeholder = Array.isArray(selectItem) ? (
    selectItem.map((item) => (
      <Placeholder key={item.value} selectItem={item} textStyled={textStyled} />
    ))
  ) : (
    <Placeholder selectItem={selectItem} textStyled={textStyled} />
  );

  return (
    <Header className={className} flexStyled={flexStyled}>
      {placeholder}
      {children}
    </Header>
  );
};
