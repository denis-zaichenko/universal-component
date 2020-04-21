import styled from 'styled-components';

import { Preset } from './styles.preset';

import { ISwitchStyled, IWrapper, IGrid, ICheckStyled } from './styles.typings';

export const Theme = {
  ...Preset,

  Grid: styled.div<IGrid>`
    display: grid;
    grid-template-columns: repeat(
      ${(p) => p.columns ?? 'auto-fill'},
      minmax(${(p) => p.minWidth ?? '200px'}, ${(p) => p.maxWidth ?? '1fr'})
    );
    grid-gap: ${(p) => p.itemGap ?? '1.5em'};
  `,

  Wrapper: styled.div<IWrapper>`
    padding: ${(p) => p.padding ?? '8px'};
    > * + * {
      margin-top: ${(p) => p.itemGap ?? '8px'};
    }
  `,

  Switch: styled.div<ISwitchStyled>`
    width: 100%;
    display: ${(p) => (p.isOpen ? 'block' : 'none')};
  `,

  Checked: styled.div<ICheckStyled>`
    ${(p) => (p.isChecked ? p.activeStyled : p.passiveStyled)}
  `,
};
