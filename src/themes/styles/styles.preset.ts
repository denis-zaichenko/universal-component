import styled, { css } from 'styled-components';

import { FONTS } from 'themes/fonts';
import { FONT_SIZES } from 'themes/font-size';
import { COLORS } from 'themes/colors';

import { IFlexPresetStyled, IFlexStyled, ITextStyled } from './styles.typings';

const flex = css<IFlexPresetStyled>`
  width: 100%;
  display: flex;

  ${(p) => p.wrap ?? `flex-wrap: ${p.wrap};`}
  ${(p) => p.alignItem ?? `align-items: ${p.alignItem}`};
  ${(p) => p.justifyContent ?? `justify-content: ${p.justifyContent}`};
`;

const text = css<ITextStyled>`
  min-width: fit-content;
  font-family: ${(p) => FONTS[p.fontFamily ?? 'regular']};
  font-size: ${(p) => FONT_SIZES[p.fontSize ?? 'regular']};

  ${(p) => p.color && `color: ${COLORS[p.color]}`};
  ${(p) => p.margin && `margin: ${p.margin}`};
`;

export const Preset = {
  Paragraph: styled.p<ITextStyled>`
    ${text};
  `,
  Text: styled.span<ITextStyled>`
    ${text}
  `,

  FlexList: styled.div<IFlexStyled>`
    ${flex}
    > * + * {
      margin-left: ${(p) => p.itemGap ?? '8px'} !important;
    }
  `,
  FlexColumn: styled.div<IFlexStyled>`
    ${flex}
    flex-direction: column;
    > * + * {
      margin-top: ${(p) => p.itemGap ?? '8px'} !important;
    }
  `,
};
