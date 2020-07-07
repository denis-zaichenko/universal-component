import React, { FC } from 'react';
import styled from 'styled-components';

import { CHECKBOX_STYLE_THEMES, TCheckboxTheme } from './checkbox.constants';

import { CSS } from 'typings';

import { Theme } from 'themes';

export interface ICheckboxComponentProps {
  className?: string;
  theme?: TCheckboxTheme;
  isDisabled?: boolean;

  setValue: (value: string) => void;
}

interface ICheckboxProps extends ICheckboxComponentProps {
  isChecked: boolean;
  item: IItem;
}

const Wrapper = styled(Theme.Wrapper)<{ css: CSS }>`
  padding: 16px;
  ${(p) => p.css}
`;

export const Checkbox: FC<ICheckboxProps> = (props) => {
  const {
    setValue,
    item,
    className,
    theme,
    isDisabled,
    isChecked,
    children,
  } = props;
  const { label, value } = item;
  const { active, disabled } = CHECKBOX_STYLE_THEMES[theme ?? 'default'];

  const css = isChecked ? active : disabled;
  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    setValue(value);
  };

  return (
    <Wrapper
      className={className}
      css={css}
      onClick={handleClick}
      fontFamily="bold"
    >
      {children ?? (label || value)}
    </Wrapper>
  );
};
