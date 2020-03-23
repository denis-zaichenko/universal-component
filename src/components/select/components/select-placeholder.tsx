import React from 'react';
import styled from 'styled-components';

import { selectItemToString } from '../select.utils';

import { ISelectItem } from '../select.typings';
import { IComponent } from 'typings/component';

import { Theme, ITextStyled } from 'themes/styles';

export interface ISelectPlaceholderProps extends IComponent {
  selectItem: ISelectItem;
  placeholder?: string;
  textStyled?: ITextStyled;
}

const PlaceholderStyled = styled(Theme.Text)``;

export const Placeholder = (props: ISelectPlaceholderProps) => {
  const { placeholder, selectItem, textStyled } = props;

  return (
    <PlaceholderStyled {...textStyled}>
      {selectItemToString(selectItem, placeholder)}
    </PlaceholderStyled>
  );
};
