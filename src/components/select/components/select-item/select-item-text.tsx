import React from 'react';
import styled from 'styled-components';

import { Item, ISelectItemProps } from './select-item';
import { Placeholder } from '../select-placeholder';

import { ITextStyled } from 'themes/styles';

const TextItemStyled = styled(Item)``;

export interface ISelectTextItemProps extends ISelectItemProps {
  textStyled?: ITextStyled;
}

export const isTextItem = (props: any): props is ISelectTextItemProps =>
  props.value;

export const TextItem = (props: ISelectTextItemProps) => {
  const { value, children, className, textStyled } = props;

  return (
    <TextItemStyled value={value} className={className}>
      <Placeholder selectItem={value} textStyled={textStyled} />
      {children}
    </TextItemStyled>
  );
};
