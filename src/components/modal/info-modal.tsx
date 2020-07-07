import React, { FC, ReactElement } from 'react';

import { Button } from 'components/button';
import { ModalWrapper, IModalWrapperProps } from './modal-wrapper';

export interface IInformationModalParameters extends IModalWrapperProps {
  buttonText: string;
  onConfirm?: () => void;
}

export interface IInfoModalProps extends IInformationModalParameters {
  title?: ReactElement;
}

export const InfoModal: FC<IInfoModalProps> = (props) => {
  const {
    isClose,
    children,
    buttonText,
    className,
    title,
    isNotCenter,
    itemGap,

    onCloseModal,
    onConfirm = onCloseModal,
  } = props;

  return (
    <ModalWrapper
      isNotCenter={isNotCenter}
      className={className}
      isClose={isClose}
      onCloseModal={onCloseModal}
      itemGap={itemGap}
    >
      {title}
      {children}
      <Button onClick={onConfirm} title={buttonText} />
    </ModalWrapper>
  );
};
