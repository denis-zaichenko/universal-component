import React, { FC, ReactElement } from 'react';

import { Image, TImageNames } from 'components/image';
import { InfoModal, IInfoModalProps } from './info-modal';

export interface IInfoImageModalProps extends IInfoModalProps {
  image: TImageNames;
  subtitle?: ReactElement;
}

export const InfoImageModal: FC<IInfoImageModalProps> = (props) => {
  const {
    children,
    className,

    isClose,
    isNotCenter,

    image,
    buttonText,
    title,
    subtitle,

    itemGap,

    onConfirm,
    onCloseModal,
  } = props;

  return (
    <InfoModal
      isNotCenter={isNotCenter}
      className={className}
      isClose={isClose}
      itemGap={itemGap}
      buttonText={buttonText}
      title={title}
      onConfirm={onConfirm}
      onCloseModal={onCloseModal}
    >
      <Image type={image} />
      {subtitle}
      {children}
    </InfoModal>
  );
};
