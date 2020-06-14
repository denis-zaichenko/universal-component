import React, { FC } from 'react';
import styled from 'styled-components';

import { TCheckboxTheme, CHECKBOX_STYLE_THEMES } from './checkbox.constants';
import { CSS } from 'typings';

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

const Wrapper = styled.div<{ css: CSS }>`
  padding: 16px;
  ${(p) => p.css}
`;

export const Checkbox: FC<ICheckboxProps> = (props) => {
  const { setValue, item, className, theme, isDisabled, isChecked } = props;
  const { label, value } = item;
  const { active, disabled } = CHECKBOX_STYLE_THEMES[theme ?? 'default'];

  const css = isChecked ? active : disabled;
  const handleClick = () => {
    !isDisabled && setValue(value);
  };

  return (
    <Wrapper className={className} css={css} onClick={handleClick}>
      {label || value}
    </Wrapper>
  );
};
