import React, { FC, ReactElement } from 'react';

import { Button } from 'components/button';
import { ModalWrapper, IModalWrapperProps } from './modal-wrapper';

export interface IInfoModalProps extends IModalWrapperProps {
  buttonText: string;
  onConfirm(): void;

  title?: ReactElement;
}

export const InfoModal: FC<IInfoModalProps> = (props) => {
  const {
    isClose,
    children,
    buttonText,
    className,
    title,

    onConfirm,
    onCloseModal,
  } = props;

  return (
    <ModalWrapper
      className={className}
      isClose={isClose}
      onCloseModal={onCloseModal}
    >
      {title}
      {children}
      <Button onClick={onConfirm} title={buttonText} />
    </ModalWrapper>
  );
};
