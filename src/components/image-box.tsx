import React, { FC, ReactElement, memo } from 'react';

import { Image, TImageNames } from 'components/image';

import { Theme } from 'themes';

type TImageBoxPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IImageBoxProps {
  className?: string;
  imageName: TImageNames;
  elementTitle: ReactElement;
  onClick?: () => void;
  titlePosition?: TImageBoxPosition;
  sizeImage?: string;
  itemGap?: string;
}

export const ImageBox: FC<IImageBoxProps> = memo((props) => {
  const {
    className,
    imageName,
    elementTitle,
    titlePosition = 'bottom',
    sizeImage = '100px',
    itemGap = '8px',
    onClick,
  } = props;

  const isColumn = titlePosition === 'bottom' || titlePosition === 'top';
  const isBeforeImage = titlePosition === 'top' || titlePosition === 'left';

  return (
    <Theme.Flexbox
      isColumn={isColumn}
      isCentralize
      onClick={onClick}
      className={className}
      itemGap={itemGap}
    >
      {isBeforeImage && elementTitle}
      <Image size={sizeImage} type={imageName} />
      {!isBeforeImage && elementTitle}
    </Theme.Flexbox>
  );
});
