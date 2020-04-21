import React from 'react';
import styled from 'styled-components';

import { selectItemToString } from '../../select.utils';

import { IComponent } from 'typings';

import { Theme, ITextStyled } from 'themes';

export interface ISelectPlaceholderProps extends IComponent {
  selectItem: TSelectItem;
  placeholder?: string;
  textStyled?: ITextStyled;
}

const PlaceholderStyled = styled(Theme.Text)``;

export const Placeholder = (props: ISelectPlaceholderProps) => {
  const { placeholder, selectItem, textStyled, children } = props;

  return (
    <PlaceholderStyled {...textStyled}>
      {selectItemToString(selectItem, placeholder)}
      {children}
    </PlaceholderStyled>
  );
};
