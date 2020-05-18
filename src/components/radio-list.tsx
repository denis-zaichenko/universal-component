import React, { FC } from 'react';
import styled from 'styled-components';

import { Radio } from 'components/radio';

import { TRadioStyles } from './radio/radio';

import { Theme, IFlexboxStyled } from 'themes';

export interface IRadioListProps extends IFlexboxStyled, TRadioStyles {
  radioName: string;
  selectValue: string | string[];
  items: string[];
  setData(item: string): () => void;
}

const Wrapper = styled(Theme.Flexbox)`
  width: 100%;
`;

export const RadioList: FC<IRadioListProps> = (props) => {
  const {
    items,
    radioName,
    activeStyled,
    passiveStyled,
    selectValue,
    setData,
    ...flexBoxStyled
  } = props;

  return (
    <Wrapper {...flexBoxStyled}>
      {items.map((item, index) => (
        <Radio
          radioName={radioName}
          selectValue={selectValue}
          setData={setData}
          value={item}
          activeStyled={activeStyled}
          passiveStyled={passiveStyled}
          key={index}
        />
      ))}
    </Wrapper>
  );
};
