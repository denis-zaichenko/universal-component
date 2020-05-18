import React, { FC } from 'react';

import { Image, IImageParameters, TImageNames } from './image';

export interface IArrowIconProps extends IImageParameters {
  arrowUp?: TImageNames;
  arrowDown?: TImageNames;
  isArrowUp: boolean;
}

export const ArrowIcon: FC<IArrowIconProps> = (props) => {
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
    <Image
      className={className}
      type={isArrowUp ? arrowUp : arrowDown}
      height={height}
      size={size}
      width={width}
    />
  );
};
