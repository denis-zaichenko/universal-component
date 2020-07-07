import React, { ReactNode } from 'react';
import styled from 'styled-components';

import {
  SelectorProvider,
  ISelectorContextParameters,
} from './selector.context';
import { SelectorHeader, SelectorMenu, SelectorItem } from './components';

interface ISelectorProps extends ISelectorContextParameters {
  className?: string;
  children?: ReactNode;
}

const SelectorStyled = styled.div`
  position: relative;
`;

export const Selector = (props: ISelectorProps) => {
  const { className, children, selectValue, setValue } = props;

  return (
    <SelectorStyled className={className}>
      <SelectorProvider selectValue={selectValue} setValue={setValue}>
        {children}
      </SelectorProvider>
    </SelectorStyled>
  );
};

Selector.Header = SelectorHeader;
Selector.Menu = SelectorMenu;
Selector.Item = SelectorItem;
