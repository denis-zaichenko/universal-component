import React, { memo, FC } from 'react';

import { TChangeEvent } from 'typings';
import { TImageNames } from 'components/image';
import { ITextTemplate } from 'themes';

import { TextInputStyles, IInputStyled } from './text-input.styles';

type TTextInput = IInputStyled & ITextTemplate;
export interface ITextInputProps<T = string> extends TTextInput {
  className?: string;
  icon?: TImageNames;

  placeholder?: string;
  option: T;
  value: string;
  setField(option: T, value: string): void;
}

export const TextInput: FC<ITextInputProps> = memo((props) => {
  const {
    className,
    icon,
    iconSize = '0.5em',
    setField,
    value,
    option,
    placeholder,
    ...textStyles
  } = props;

  const handleChange: TChangeEvent = (e) => setField(option, e.target.value);

  return (
    <TextInputStyles.Wrapper itemGap="16px" iconSize={icon && iconSize}>
      {icon && <TextInputStyles.Icon type={icon} size={iconSize} />}
      <TextInputStyles.Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
        value={value}
        {...textStyles}
      />
    </TextInputStyles.Wrapper>
  );
});
