import { TFontSizeNames, TColorNames, TFontsNames } from 'themes';
import { TImageNames } from 'components/image';
import { CSS } from 'typings';

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

export interface ICheckStyled {
  css: CSS;
}

export interface IFlexboxStyled extends ITextTemplate {
  itemGap?: string;
  isColumn?: boolean;
  justifyContent?: TFlexDirectionItem;
  alignItem?: TFlexDirectionItem;
  isCentralize?: boolean;
}
