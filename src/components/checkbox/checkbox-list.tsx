import React, { FC, ReactElement } from 'react';

import { Checkbox, ICheckboxComponentProps } from './checkbox';

import { isIncludeInArray } from 'services/utils';

import { Theme, IFlexboxStyled } from 'themes';

interface ICheckboxListProps extends ICheckboxComponentProps, IFlexboxStyled {
  value: string | string[];
  items: IItem[];
}

export const CheckboxList: FC<ICheckboxListProps> = (props) => {
  const {
    setValue,
    items,
    className,
    theme,
    value,
    isDisabled,

    ...flexbox
  } = props;

  const isChecked = (el: string) => isIncludeInArray(value, el);

  const Items = items.map<ReactElement>((item: IItem, index: number) => {
    const isSelect = isChecked(item.value);
    return (
      <Checkbox
        key={index}
        isDisabled={isDisabled && !isSelect}
        setValue={setValue}
        item={item}
        theme={theme}
        isChecked={isSelect}
      />
    );
  });

  return (
    <Theme.Flexbox className={className} {...flexbox}>
      {Items}
    </Theme.Flexbox>
  );
};
