import { css } from 'styled-components';

import { FONTS, COLORS } from 'themes';

import { CSS } from 'typings';

export interface IThemeSelectorItemParameters {
  default: CSS;
  select: CSS;
  hover: CSS;
}

interface IThemeSelectorParameter {
  selector: CSS;
  menu: CSS;
  item: IThemeSelectorItemParameters;
  header: CSS;
}

export type TThemeSelector = 'default';

export const DEFAULT_CSS = css``;

export const SELECTOR_THEME: Record<TThemeSelector, IThemeSelectorParameter> = {
  default: {
    selector: css`
      font-family: ${FONTS.bold};
    `,
    menu: DEFAULT_CSS,
    header: css`
      border-color: ${COLORS.black};
      padding: 18px;
      text-align: center;
    `,
    item: {
      default: css`
        padding: 5px 15px;
      `,
      hover: css`
        background-color: ${COLORS.white};
      `,
      select: css`
        background-color: ${COLORS.white};
      `,
    },
  },
};
