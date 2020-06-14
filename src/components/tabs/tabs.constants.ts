import { css } from 'styled-components';

import { IThemeCSS } from 'typings';

const DEFAULT: IThemeCSS = {
  active: css``,
  inactive: css``,
};

export const TAB_THEMES = {
  default: DEFAULT,
};

export type TTabThemes = keyof typeof TAB_THEMES;
