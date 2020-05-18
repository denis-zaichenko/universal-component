import React from 'react';

import { ICheckCssStyled } from 'themes';

import { RadioStyles } from './radio.styles';

export type TRadioStyles = Partial<ICheckCssStyled>;

export interface IRadioProps extends TRadioStyles {
  className?: string;
  value: string;
  radioName: string;
  selectValue: string | string[];
  setData: (item: string) => () => void;
}

export const Radio = (props: IRadioProps) => {
  const {
    className,
    radioName,
    selectValue,
    setData,
    activeStyled,
    passiveStyled,
    value,
  } = props;

  const checkSelect = (newValue: string): boolean =>
    typeof selectValue === 'string'
      ? selectValue === newValue
      : selectValue.includes(newValue);

  return (
    <RadioStyles.Label className={className}>
      <RadioStyles.Radio name={radioName} type="radio" />
      <RadioStyles.Checked
        isChecked={checkSelect(value)}
        activeStyled={activeStyled}
        passiveStyled={passiveStyled}
        onClick={setData(value)}
      >
        {value}
      </RadioStyles.Checked>
    </RadioStyles.Label>
  );
};
