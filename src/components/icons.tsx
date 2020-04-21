import React from 'react';
import styled from 'styled-components';

import { FComponent, TMouseEvent } from 'typings';

import { Theme } from '../themes/styles/styles';

const ICON_TYPES = {
  arrowDown: require('../assets/icons/down-chevron.svg'),
  arrowUp: require('../assets/icons/up-chevron.svg'),
  cross: require('../assets/icons/cross.svg'),
};

export type TIconNames = keyof typeof ICON_TYPES;

interface IIconStyled {
  height?: string;
  width?: string;
  size?: string;
}

export interface IIconProps extends IIconStyled {
  type: TIconNames;
  onClick?: TMouseEvent;
}

const IconImg = styled.img<IIconStyled>`
  user-select: none;
  pointer-events: none;
  max-width: 100%;

  padding: 0.25em;

  ${(p) => (p.height || p.size) && `height: ${p.height ?? p.size}`};
  ${(p) => (p.width || p.size) && `width: ${p.width ?? p.size}`};
`;

export const Icon: FComponent<IIconProps> = (props) => {
  const { type, height, width, size, className, onClick } = props;

  return (
    <Theme.FlexList isCentralize onClick={onClick}>
      <IconImg
        src={ICON_TYPES[type]}
        className={className}
        height={height}
        width={width}
        size={size}
        alt="img"
      />
    </Theme.FlexList>
  );
};

export interface IArrowIconProps extends IIconStyled {
  arrowUp?: TIconNames;
  arrowDown?: TIconNames;
  isArrowUp: boolean;
}

export const ArrowIcon: FComponent<IArrowIconProps> = (props) => {
  const {
    className,
    isArrowUp,
    arrowDown = 'arrowDown',
    arrowUp = 'arrowUp',
    height,
    size,
    width,
  } = props;

  return (
    <Icon
      className={className}
      type={isArrowUp ? arrowUp : arrowDown}
      height={height}
      size={size}
      width={width}
    />
  );
};
