import React from 'react';
import styled from 'styled-components';

import { useSelectContext } from '../select.context';

import { ISelectItem } from '../select.typings';

import { Theme, ITextStyled } from 'themes/styles';

export interface ISelectPlaceholderProps extends ITextStyled {
  placeholder?: string;
  selectItem?: ISelectItem;
}

const PlaceholderStyled = styled(Theme.Paragraph)``;

export const Placeholder = (props: ISelectPlaceholderProps) => {
  const { placeholder, selectItem, ...textProps } = props;
  const item: ISelectItem = selectItem ?? useSelectContext().selectItem;
  const { value, label } = item;

  return (
    <PlaceholderStyled {...textProps}>
      {label || value || placeholder || ' '}
    </PlaceholderStyled>
  );
};
