import React from 'react';
import styled from 'styled-components';

import { IComponent } from 'typings/component';

const ICON_TYPES = {};

export type TIconNames = keyof typeof ICON_TYPES;

interface IIconStyled {
  height?: string;
  width?: string;
  size?: string;
}

export interface IIconProps extends IComponent, IIconStyled {
  type: TIconNames;
}

const IconImg = styled.img<IIconStyled>`
  user-select: none;
  pointer-events: none;
  max-width: 100%;

  ${(p) => (p.height || p.size) && `height: ${p.height || p.size}`};
  ${(p) => (p.width || p.size) && `width: ${p.width || p.size}`};
`;

export const Icon = (props: IIconProps) => {
  const { type, height, width, size, className } = props;
  const src = ICON_TYPES[type];
  return (
    <IconImg
      src={src}
      className={className}
      height={height}
      width={width}
      size={size}
      alt="img"
    />
  );
};
