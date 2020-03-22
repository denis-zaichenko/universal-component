import React from 'react';
import styled from 'styled-components';

import { Item, ISelectItemProps } from './select-item';
import { Icon, TIconNames } from 'components/icons';
import { Placeholder } from '../select-placeholder';

import { ITextStyled } from 'themes/styles';

type TItem = ISelectItemProps & ITextStyled;
export interface ISelectItemWithIconProps extends TItem {
  iconSize?: string;
  icon: TIconNames;
}

const ItemStyled = styled(Item)<{ size?: string }>`
  position: relative;
  margin-left: ${(p) => p.size && `calc(${p.size} + 1em)`};
`;

const IconStyled = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5em;
`;

export const isIconItem = (props: any): props is ISelectItemWithIconProps =>
  props.icon && props.value;

export const ItemIcon = (props: ISelectItemWithIconProps) => {
  const { value, iconSize, children, className, icon, ...styled } = props;

  return (
    <ItemStyled className={className} value={value}>
      <IconStyled type={icon} size={iconSize} />
      <Placeholder selectItem={value} {...styled} />
      {children}
    </ItemStyled>
  );
};
