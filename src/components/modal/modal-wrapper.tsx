import React, { FC } from 'react';
import styled from 'styled-components';

import { Modal } from 'components/modal';
import { Image } from 'components/image';

import { Theme } from 'themes';

export interface IModalWrapperProps {
  onCloseModal(): void;

  className?: string;
  isClose?: boolean;
  itemGap?: string;
  isNotCenter?: boolean;
}

const Wrapper = styled(Theme.Wrapper)<{ isNotCenter?: boolean }>`
  position: relative;
  background: white;
  padding: 40px 32px;
  border-radius: 24px;
  text-align: ${(p) => !p.isNotCenter && 'center'};
  margin: 24px;
`;
const CloseTest = styled(Image)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ModalWrapper: FC<IModalWrapperProps> = (props) => {
  const {
    isClose,
    onCloseModal,
    children,
    className,
    itemGap,
    isNotCenter,
  } = props;

  return (
    <Modal className={className} isOpen={!isClose}>
      <Wrapper itemGap={itemGap} isNotCenter={isNotCenter}>
        <CloseTest type="closeModal" onClick={onCloseModal} />
        {children}
      </Wrapper>
    </Modal>
  );
};
