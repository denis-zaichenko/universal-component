import React, { FC } from 'react';
import styled from 'styled-components';

import { Z_INDEXES, COLORS } from 'themes';

export interface IModalProps {
  className?: string;
  isOpen?: boolean;
}

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: ${Z_INDEXES.MODAL};
  background: ${COLORS.modalBackground};
  margin: 0 !important;
`;

export const Modal: FC<IModalProps> = (props) => {
  const { className, children, isOpen } = props;

  return (
    <ModalContainer isOpen={!!isOpen} className={className}>
      {children}
    </ModalContainer>
  );
};
