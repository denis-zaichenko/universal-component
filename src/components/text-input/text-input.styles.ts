import styled from 'styled-components';

import { Image } from 'components/image';

import { Theme, cssTextTemplate, ITextTemplate } from 'themes';

export interface IInputStyled {
  iconSize?: string;
}

export const TextInputStyles = {
  Wrapper: styled(Theme.Flexbox)<IInputStyled>`
    position: relative;
    ${(p) => p.iconSize && `padding-left: calc(${p.iconSize} + 0.25em);`}
  `,
  Input: styled.input<ITextTemplate>`
    &,
    &::placeholder {
      ${cssTextTemplate}
    }
    flex: 1;
  `,

  Icon: styled(Image)`
    position: absolute;
    ${({ size }) => `
    top: calc(${size}/6); 
    left: calc(${size}/6);
  `}
  `,
};
