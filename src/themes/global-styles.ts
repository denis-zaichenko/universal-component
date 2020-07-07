import { createGlobalStyle } from 'styled-components';
import 'resets.css';

import { FONTS } from './fonts';
import { FONT_SIZES } from './font-sizes';
import { COLORS } from './colors';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: ${FONTS.regular};
  font-size: ${FONT_SIZES.px16};
  color: ${COLORS.black};
}

body {
  min-height: 100vh;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  color: inherit;
  font-family: inherit;
}

`;
