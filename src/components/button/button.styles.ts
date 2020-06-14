import styled from 'styled-components';

import { CSS } from 'typings';

export interface IButtonStyled {
  css: CSS;
}

export const ButtonStyles = {
  Wrapper: styled.button<IButtonStyled>`
    text-align: center;
    outline: none;

    ${(p) => p.css}
  `,
};
