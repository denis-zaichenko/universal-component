import React, { FC } from 'react';
import styled from 'styled-components';

import { Image } from 'components/image';

import { useSelectorContext } from '../selector.context';
import { getItemText } from 'services/utils';

interface ISelectorHeaderProps {
  className?: string;
  placeholder?: string;
}

const Header = styled.div`
  min-height: 16px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px;
`;

const Icon = styled(Image)`
  position: absolute;

  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SelectorHeader: FC<ISelectorHeaderProps> = (props) => {
  const { className, children, placeholder } = props;
  const { selectValue, setOpen, isOpen } = useSelectorContext();

  return (
    <Header className={className} onClick={setOpen(!isOpen)}>
      <Icon type="arrowDown" />
      {selectValue.value ? getItemText(selectValue) : placeholder}
      {children}
    </Header>
  );
};
