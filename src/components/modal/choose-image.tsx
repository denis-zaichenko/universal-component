import React, { FC, ReactElement } from 'react';

import { ChooseModal, IChooseModalProps } from './choose-modal';
import { Image, TImageNames } from 'components/image';

export interface IChooseImageModalProps extends IChooseModalProps {
  className?: string;
  subtitle?: ReactElement;

  image: TImageNames;
}

export const ChooseImageModal: FC<IChooseImageModalProps> = (props) => {
  const { className, image, children, subtitle, ...parameters } = props;

  return (
    <ChooseModal className={className} {...parameters}>
      <Image type={image} />
      {subtitle}
      {children}
    </ChooseModal>
  );
};
