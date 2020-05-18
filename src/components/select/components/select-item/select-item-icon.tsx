import React, { FC } from 'react';
import styled from 'styled-components';

import { Item, ISelectItemProps } from './select-item';
import { Image, IImageProps } from 'components/image';
import { Placeholder } from '../select-placeholder';

export interface ISelectItemWithIconProps extends ISelectItemProps {
  iconParameters: IImageProps;
}

interface ISelectItemWithIconStyled {
  size?: string;
}

const ItemStyled = styled(Item)<ISelectItemWithIconStyled>`
  position: relative;
  margin-left: ${(p) => p.size && `calc(${p.size} + 1em)`};
`;

const IconStyled = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5em;
`;

export const ItemIcon: FC<ISelectItemWithIconProps> = (props) => {
  const { value, children, className, iconParameters } = props;

  return (
    <ItemStyled className={className} value={value}>
      <IconStyled size={iconParameters?.size} {...iconParameters} />
      <Placeholder selectItem={value} />
      {children}
    </ItemStyled>
  );
};
