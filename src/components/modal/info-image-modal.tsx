import React, { FC } from 'react';

import { Image, TImageNames } from 'components/image';
import { InfoModal, IInfoModalProps } from './info-modal';

export interface IInfoImageModalProps extends IInfoModalProps {
  image: TImageNames;
}

export const InfoImageModal: FC<IInfoImageModalProps> = (props) => {
  const {
    isClose,
    children,
    buttonText,
    className,
    title,
    image,
    itemGap,

    onConfirm,
    onCloseModal,
  } = props;

  return (
    <InfoModal
      className={className}
      isClose={isClose}
      itemGap={itemGap}
      buttonText={buttonText}
      title={title}
      onConfirm={onConfirm}
      onCloseModal={onCloseModal}
    >
      <Image type={image} />
      {children}
    </InfoModal>
  );
};
