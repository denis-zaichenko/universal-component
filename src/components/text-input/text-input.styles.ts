import styled from 'styled-components';

import { Image } from 'components/image';

import { ITextTemplate, Theme } from 'themes';

export interface IInputStyled {
  iconSize?: string;
  padding?: string;
}

export const TextInputStyles = {
  Wrapper: styled(Theme.Flexbox)<IInputStyled>`
    padding: 0.75em;
    border: 1px solid;

    ${(p) => p.padding && `padding: ${p.padding};`}
    ${(p) =>
      p.iconSize &&
      `
      position: relative;
      padding-left: calc(${p.iconSize} + 0.25em);
    `}
  `,
  Input: styled.input<ITextTemplate>`
    flex: 1;
  `,

  Icon: styled(Image)`
    position: absolute;

    ${(p) =>
      p.size &&
      `
    top: calc(${p.size}/6); 
    left: calc(${p.size}/6);
    `};
  `,
};
