import styled from 'styled-components';

import { cssTextTemplate } from './css.template';
import { createItemGap, createDirection } from './styles.utils';

import {
  IFlexboxStyled,
  IWrapperStyled,
  ICheckStyled,
  ITextTemplate,
} from './styles.typings';

export const Theme = {
  Wrapper: styled.div<IWrapperStyled>`
    ${cssTextTemplate}
    ${(p) => createItemGap(true, p.itemGap)}
  `,

  Paragraph: styled.p<ITextTemplate>`
    ${cssTextTemplate}
  `,
  Text: styled.span<ITextTemplate>`
    ${cssTextTemplate}
  `,

  Switch: styled.div<{ isOpen: boolean }>`
    display: ${(p) => (p.isOpen ? 'block' : 'none')};
  `,
  Checked: styled.div<ICheckStyled>`
    ${(p) => p.css}
  `,

  Flexbox: styled.div<IFlexboxStyled>`
    ${cssTextTemplate}

    display: flex;

    ${(p) => {
      const direction = createDirection(p.alignItem, p.isCentralize);
      return direction && `align-items: ${direction};`;
    }}
    ${(p) => {
      const direction = createDirection(p.justifyContent, p.isCentralize);
      return direction && `justify-content: ${direction};`;
    }}

    ${(p) => p.isColumn && 'flex-direction: column;'}
    ${(p) => createItemGap(p.isColumn, p.itemGap)}
  `,
};
