import React, { FC } from 'react';
import styled from 'styled-components';

import { TMouseEvent } from 'typings';

import { Theme } from 'themes';

export const IMAGES = {
  arrowDown: require('../../assets/icons/down-chevron.svg'),
  arrowUp: require('../../assets/icons/up-chevron.svg'),
  cross: require('../../assets/icons/cross.svg'),
};

export type TImageNames = keyof typeof IMAGES;

interface IImageStyled {
  height?: string;
  width?: string;
  size?: string;
}

export interface IImageParameters extends IImageStyled {
  className?: string;
  onClick?: TMouseEvent;
}

export interface IImageProps extends IImageParameters {
  type: TImageNames;
}

const Img = styled.img<IImageStyled>`
  user-select: none;
  pointer-events: none;
  max-width: 100%;

  ${(p) => (p.height || p.size) && `height: ${p.height ?? p.size}`};
  ${(p) => (p.width || p.size) && `width: ${p.width ?? p.size}`};
`;

export const Image: FC<IImageProps> = (props) => {
  const { type, height, width, size, className, onClick } = props;

  return (
    <Theme.Flexbox isCentralize onClick={onClick}>
      <Img
        src={IMAGES[type]}
        className={className}
        height={height}
        width={width}
        size={size}
        alt="img"
      />
    </Theme.Flexbox>
  );
};
