import { createGlobalStyle } from 'styled-components';

/*
export function fontFace(
  name: string,
  src: string,
  fontWeight = 'normal',
  fontStyle = 'normal'
): string {
  return `
      @font-face{
          font-family: "${name}";
          src: url(${require('../assets/fonts/' + src + '.eot')});
          src: url(${require('../assets/fonts/' +
            src +
            '.eot')}?#iefix) format("embedded-opentype"),
               url(${require('../assets/fonts/' +
                 src +
                 '.woff')}) format("woff"),
               url(${require('../assets/fonts/' +
                 src +
                 '.ttf')}) format("truetype"),
               url(${require('../assets/fonts/' +
                 src +
                 '.svg')}#${name}) format("svg");

          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}*/

export const GlobalFonts = createGlobalStyle`

`;

export const FONTS = {
  bold: '',
  medium: '',
  regular: '',
};

export type TFontsNames = keyof typeof FONTS;
