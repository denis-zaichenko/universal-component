import React, { FC } from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';
import { getItemText } from 'services/utils';

interface ISelectorItemProps {
  className?: string;

  value: IItem;
}

const Item = styled.div``;

export const SelectorItem: FC<ISelectorItemProps> = (props) => {
  const { className, value, children } = props;
  const { setValue, setOpen } = useSelectorContext();

  const handleClick = () => {
    setValue(value);
    setOpen(false)();
  };

  return (
    <Item className={className} onClick={handleClick}>
      {getItemText(value)}
      {children}
    </Item>
  );
};
