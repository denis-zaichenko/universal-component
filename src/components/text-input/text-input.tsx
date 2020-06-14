import React, { memo, FC } from 'react';

import { TImageNames } from 'components/image';

import { TextInputStyles, IInputStyled } from './text-input.styles';

type TTextInputTypes = 'text' | 'email';
type TChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;
export interface ITextInputProps extends IInputStyled {
  value: string;
  onChange: (value: string) => void;

  icon?: TImageNames;
  className?: string;
  type?: TTextInputTypes;
  placeholder?: string;
}

export const TextInput: FC<ITextInputProps> = memo((props) => {
  const {
    className,
    icon,
    iconSize = '0.5em',
    value,
    placeholder,
    type = 'text',
    onChange,
  } = props;

  const handleChange: TChangeEvent = (e) => onChange(e.target.value);

  return (
    <TextInputStyles.Wrapper
      itemGap="16px"
      iconSize={icon && iconSize}
      className={className}
    >
      {icon && <TextInputStyles.Icon type={icon} size={iconSize} />}
      <TextInputStyles.Input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </TextInputStyles.Wrapper>
  );
});
