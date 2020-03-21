import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useTabContext } from '../tabs-context';

import { IComponent } from 'typings/component';

import { Theme } from 'themes/styles';

export interface ITabPanelProps extends IComponent {}

const PanelStyled = styled(Theme.Switch)``;

export const Panel = (props: ITabPanelProps) => {
  const { children, className } = props;
  const [index, setIndex] = useState<number>(0);
  const { generatePanelIndex, indexTab } = useTabContext();

  useEffect(() => setIndex(generatePanelIndex()), []);

  const isOpen = index === indexTab;

  return (
    <PanelStyled className={className} isOpen={isOpen}>
      {children}
    </PanelStyled>
  );
};
