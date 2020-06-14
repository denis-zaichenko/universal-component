import React, { FC, ReactElement } from 'react';

import { Button } from 'components/button';
import { ModalWrapper, IModalWrapperProps } from './modal-wrapper';

import { Theme } from 'themes';

export interface IChooseModalProps extends IModalWrapperProps {
  confirmButtonTitle: string;
  cancelButtonTitle: string;
  title?: ReactElement;

  onConfirm(): void;
  onCancel?: () => void;
}

export const ChooseModal: FC<IChooseModalProps> = (props) => {
  const {
    cancelButtonTitle,
    confirmButtonTitle,
    isClose,
    title,
    children,
    itemGap,

    onCloseModal,
    onCancel = onCloseModal,
    onConfirm,
  } = props;

  return (
    <ModalWrapper
      isClose={isClose}
      onCloseModal={onCloseModal}
      itemGap={itemGap}
    >
      {title}
      {children}
      <Theme.Wrapper itemGap="24px">
        <Button onClick={onConfirm} title={confirmButtonTitle} />
        <Button onClick={onCancel} title={cancelButtonTitle} />
      </Theme.Wrapper>
    </ModalWrapper>
  );
};
