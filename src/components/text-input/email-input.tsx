import React, { FC } from 'react';

import { TextInput, ITextInputProps } from './text-input';

interface IEmailInputProps extends ITextInputProps {
  setValid(isValid: boolean): void;
}

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const EmailInput: FC<IEmailInputProps> = (props) => {
  const {
    className,
    onChange,
    value,
    icon,
    iconSize,
    padding,
    placeholder,
    setValid,
  } = props;

  const handleChange = (newText: string) => {
    onChange(newText);
    setValid(emailRegExp.test(newText));
  };

  return (
    <TextInput
      className={className}
      onChange={handleChange}
      value={value}
      icon={icon}
      iconSize={iconSize}
      padding={padding}
      placeholder={placeholder}
      type="email"
    />
  );
};
