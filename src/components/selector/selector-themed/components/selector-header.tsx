import React, { FC } from 'react';
import styled from 'styled-components';

import { Image } from 'components/image';

import { getItemText } from 'services/utils';

import { SELECTOR_THEME, TThemeSelector } from '../selector.constants';

import { CSS } from 'typings';

interface ISelectorHeaderProps {
  selectValue: IItem;
  theme: TThemeSelector;

  onToggleOpen(): void;

  placeholder?: string;
}

const Header = styled.div<{ css: CSS }>`
  min-height: 16px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px;

  ${(props) => props.css}
`;

const Icon = styled(Image)`
  position: absolute;

  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SelectorHeader: FC<ISelectorHeaderProps> = (props) => {
  const { placeholder, theme, onToggleOpen, selectValue } = props;
  const themeStyled = SELECTOR_THEME[theme ?? 'default'].header;

  return (
    <Header onClick={onToggleOpen} css={themeStyled}>
      <Icon type="arrowDown" />
      {selectValue.value ? getItemText(selectValue) : placeholder}
    </Header>
  );
};
