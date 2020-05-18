import { ThemedStyledProps, FlattenInterpolation } from 'styled-components';

import { TFontSizeNames, TColorNames, TFontsNames } from 'themes';
import { TImageNames } from 'components/image';

export type TStyledComponentsCSS<T = {}> = FlattenInterpolation<
  ThemedStyledProps<T, any>
>;
export type TCheckedStyledCSS = TStyledComponentsCSS<ICheckStyled>;

export type TFlexDirectionItem =
  | 'center'
  | 'space-between'
  | 'flex-end'
  | 'flex-start'
  | 'space-evenly';

export type TTextAlign = 'center' | 'right' | 'left';

//* CSS preset
export interface ITextTemplate {
  fontSize?: TFontSizeNames;
  fontFamily?: TFontsNames;
  color?: TColorNames;
  textAlign?: TTextAlign;
}

export interface IFlexboxTemplate {
  justifyContent?: TFlexDirectionItem;
  alignItem?: TFlexDirectionItem;
  isCentralize?: boolean;
  isColumn?: boolean;
}

export interface IBackgroundFullPageImageTemplate {
  image: TImageNames;
}

export interface IRoundTemplate {
  size: string;
}

//* Preset component
export interface IWrapperStyled extends ITextTemplate {
  itemGap?: string;
}

export interface ISwitchStyled {
  isOpen: boolean;
}

export interface ICheckCssStyled {
  activeStyled?: TCheckedStyledCSS;
  passiveStyled?: TCheckedStyledCSS;
}

export interface ICheckStyled extends ICheckCssStyled {
  isChecked: boolean;
}

export interface IFlexboxStyled extends IFlexboxTemplate, ITextTemplate {
  itemGap?: string;
  isColumn?: boolean;
}
