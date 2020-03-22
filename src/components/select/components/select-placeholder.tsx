import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../select.context';
import { selectItemToString } from '../select.utils';

import { ISelectItem } from '../select.typings';

import { Theme, ITextStyled } from 'themes/styles';

export interface ISelectPlaceholderProps extends ITextStyled {
  placeholder?: string;
  selectItem?: ISelectItem;
}

const PlaceholderStyled = styled(Theme.Text)``;

export const Placeholder = (props: ISelectPlaceholderProps) => {
  const { placeholder, selectItem, ...textProps } = props;
  const select: ISelectItem | ISelectItem[] =
    selectItem ?? useSelectContext().selectItem;

  return (
    <PlaceholderStyled {...textProps}>
      {Array.isArray(select)
        ? select.map((item) => selectItemToString(item, placeholder)).join(', ')
        : selectItemToString(select, placeholder)}
    </PlaceholderStyled>
  );
};
