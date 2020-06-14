import { FlattenInterpolation, ThemedStyledProps } from 'styled-components';

export type CSS<T = {}> = FlattenInterpolation<ThemedStyledProps<T, any>>;

export interface IThemeCSS {
  active: CSS;
  inactive: CSS;
}
