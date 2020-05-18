import styled from 'styled-components';

import { Theme } from 'themes';

export const RadioStyles = {
  Radio: styled.input`
    display: none;
  `,
  Label: styled.label`
    flex: 1;
  `,
  Checked: styled(Theme.Checked)`
    text-align: center;
    padding: 16px;
  `,
};
