import React, { FC } from 'react';
import styled from 'styled-components';

import { getItemText } from 'services/utils';

import {
  SELECTOR_THEME,
  IThemeSelectorItemParameters,
  TThemeSelector,
} from '../selector.constants';

interface ISelectorItemProps {
  value: IItem;
  theme: TThemeSelector;
  isSelect: boolean;

  setValue(item: IItem): void;
  onCloseModal(): void;
}

interface ISelectorItemStyled {
  isSelect: boolean;
  themeStyled: IThemeSelectorItemParameters;
}

const Item = styled.div<ISelectorItemStyled>`
  ${(props) => props.isSelect && props.themeStyled.select}
  ${(props) => props.themeStyled.default}

  &:hover {
    ${(props) => props.themeStyled.hover}
  }
`;

export const SelectorItem: FC<ISelectorItemProps> = (props) => {
  const { value, theme, isSelect, onCloseModal, setValue } = props;
  const themeStyled = SELECTOR_THEME[theme].item;

  const handleClick = () => {
    setValue(value);
    onCloseModal();
  };

  return (
    <Item onClick={handleClick} isSelect={isSelect} themeStyled={themeStyled}>
      {getItemText(value)}
    </Item>
  );
};
