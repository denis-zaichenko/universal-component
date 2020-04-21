import { ThemedStyledProps, FlattenInterpolation } from 'styled-components';

import { TFontSizeNames, TColorNames, TFontsNames } from 'themes';

type TStyledComponentsCSS<T> = FlattenInterpolation<ThemedStyledProps<T, any>>;
export type TCheckedStyledCSS = TStyledComponentsCSS<ICheckStyled>;

type TGrid = 'auto-fill' | 'auto-fit';

type TFlexDirectionItem =
  | 'center'
  | 'space-between'
  | 'flex-end'
  | 'flex-start'
  | 'space-evenly';

type TTextAlign = 'center' | 'right' | 'left';

type TWrapper = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface ITextStyled {
  fontSize?: TFontSizeNames;
  fontFamily?: TFontsNames;

  margin?: string;
  color?: TColorNames;

  textAlign?: TTextAlign;
  lineHeight?: number;
}

export interface IButtonStyled {
  fontSize?: TFontSizeNames;
  font?: TFontsNames;

  width?: string;
  padding?: string;

  backgroundColor?: TColorNames;
  color?: TColorNames;
}

export interface IWrapper {
  itemGap?: string;
  padding?: string;
}

export interface ISwitchStyled {
  isOpen: boolean;
}

export interface ICheckStyled {
  isChecked: boolean;
  activeStyled: TCheckedStyledCSS;
  passiveStyled: TCheckedStyledCSS;
}

export interface IFlexPresetStyled {
  justifyContent?: TFlexDirectionItem;
  alignItem?: TFlexDirectionItem;
  wrap?: TWrapper;
  isCentralize?: boolean;
}

export interface IFlexStyled extends IFlexPresetStyled {
  itemGap?: string;
}

export interface IGrid {
  columns?: number | TGrid;
  itemGap?: string;

  minWidth?: string;
  maxWidth?: string;
}
