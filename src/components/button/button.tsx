import React, { FC } from 'react';

import { TButtonTheme, BUTTON_THEME } from './button.constants';

import { ButtonStyles } from './button.styles';

export interface IButtonProps {
  title: string;
  onClick(): void;

  className?: string;
  isDisabled?: boolean;
  theme?: TButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, onClick, title, isDisabled, theme, children } = props;
  const css = BUTTON_THEME[theme ?? 'default'];

  return (
    <ButtonStyles.Wrapper
      disabled={isDisabled}
      onClick={onClick}
      className={className}
      css={css}
    >
      {title}
      {children}
    </ButtonStyles.Wrapper>
  );
};
