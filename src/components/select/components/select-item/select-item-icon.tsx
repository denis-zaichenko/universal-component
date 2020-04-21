import React from 'react';
import styled from 'styled-components';

import { Item, ISelectItemProps } from './select-item';
import { Icon, IIconProps } from 'components/icons';
import { Placeholder } from '../select-placeholder';

import { ITextStyled } from 'themes';

export interface ISelectItemWithIconProps extends ISelectItemProps {
  textStyled?: ITextStyled;
  iconParameters: IIconProps;
}

interface ISelectItemWithIconStyled {
  size?: string;
}

const ItemStyled = styled(Item)<ISelectItemWithIconStyled>`
  position: relative;
  margin-left: ${(p) => p.size && `calc(${p.size} + 1em)`};
`;

const IconStyled = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5em;
`;

export const ItemIcon = (props: ISelectItemWithIconProps) => {
  const { value, children, className, textStyled, iconParameters } = props;

  return (
    <ItemStyled className={className} value={value}>
      <IconStyled size={iconParameters?.size} {...iconParameters} />
      <Placeholder selectItem={value} {...textStyled} />
      {children}
    </ItemStyled>
  );
};
