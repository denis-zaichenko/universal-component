import { css } from 'styled-components';

import { CSS } from 'typings';

interface ICheckboxThemeStyled {
  active: CSS;
  disabled: CSS;
}

const DEFAULT: ICheckboxThemeStyled = {
  active: css``,
  disabled: css``,
};

export const CHECKBOX_STYLE_THEMES = {
  default: DEFAULT,
};

export type TCheckboxTheme = keyof typeof CHECKBOX_STYLE_THEMES;
