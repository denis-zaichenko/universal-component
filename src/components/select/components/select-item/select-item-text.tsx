import React from 'react';
import styled from 'styled-components';

import { Item, ISelectItemProps } from './select-item';
import { Placeholder } from '../select-placeholder';

import { ITextStyled } from 'themes/styles';

const TextItemStyled = styled(Item)``;

type TItemExtends = ISelectItemProps & ITextStyled;
export interface ISelectTextItemProps extends TItemExtends {}

export const isTextItem = (props: any): props is ISelectTextItemProps =>
  props.value;

export const TextItem = (props: ISelectTextItemProps) => {
  const { value, children, className, ...textStyled } = props;

  return (
    <TextItemStyled value={value} className={className}>
      <Placeholder selectItem={value} {...textStyled} />
      {children}
    </TextItemStyled>
  );
};
