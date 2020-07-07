import React, { FC } from 'react';

import { SelectorHeader, SelectorItem, SelectorMenu } from './components';

import { TThemeSelector } from './selector.constants';

import { Theme } from 'themes';
import { useSelectorThemed } from './selector-themed.state';

interface ISelectorThemedProps {
  items: IItem[];
  selectValue: IItem;
  setValue(value: IItem): void;

  theme?: TThemeSelector;
  topGap?: string;
  itemGap?: string;
  placeholder?: string;
}

export const SelectorThemed: FC<ISelectorThemedProps> = (props) => {
  const {
    items,
    selectValue,
    setValue,
    theme = 'default',
    topGap = '0px',
    itemGap = '0px',
    placeholder,
  } = props;
  const { isOpen, onToggleOpen, updateFieldCallback } = useSelectorThemed();

  return (
    <Theme.Flexbox>
      <SelectorHeader
        placeholder={placeholder}
        onToggleOpen={onToggleOpen}
        selectValue={selectValue}
        theme={theme}
      />
      <SelectorMenu
        topSpace={topGap}
        itemGap={itemGap}
        isOpen={isOpen}
        theme={theme}
      >
        {items.map((item, index) => (
          <SelectorItem
            key={index}
            value={item}
            isSelect={Object.is(item, selectValue)}
            onCloseModal={updateFieldCallback('isOpen')(false)}
            setValue={setValue}
            theme={theme}
          />
        ))}
      </SelectorMenu>
    </Theme.Flexbox>
  );
};
