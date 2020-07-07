import { css } from 'styled-components';

import { IMAGES } from 'components/image';
import { FONTS, FONT_SIZES, COLORS } from 'themes';

import {
  ITextTemplate,
  IBackgroundFullPageImageTemplate,
} from './styles.typings';

export const cssTextTemplate = css<ITextTemplate>`
  min-width: fit-content;

  ${(p) => p.fontFamily && `font-family: ${FONTS[p.fontFamily]}`};
  ${(p) => p.fontSize && `font-size: ${FONT_SIZES[p.fontSize]}`};

  ${(p) => p.color && `color: ${COLORS[p.color]};`}
  ${(p) => p.textAlign && `text-align: ${p.textAlign};`}
`;

export const cssBackgroundImageTemplate = css<IBackgroundFullPageImageTemplate>`
  background-image: url(${(p) => IMAGES[p.image]});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
