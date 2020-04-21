import styled, { css } from 'styled-components';

import { FONTS, FONT_SIZES, COLORS } from 'themes';

import { IFlexPresetStyled, IFlexStyled, ITextStyled } from './styles.typings';

const flex = css<IFlexPresetStyled>`
  display: flex;

  ${(p) => p.wrap && `flex-wrap: ${p.wrap};`}
  ${(p) =>
    (p.alignItem || p.isCentralize) &&
    `align-items: ${p.alignItem ?? (p.isCentralize && 'center')};`};
  ${(p) =>
    (p.justifyContent || p.isCentralize) &&
    `justify-content: ${p.justifyContent ?? (p.isCentralize && 'center')};`};
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
