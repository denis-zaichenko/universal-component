import React from 'react';
import styled from 'styled-components';

import { Item, CheckedItem, Menu, Placeholder } from './components';
import { SelectProvider } from './select.context';

import { useOutsideCall } from 'hooks';
import { useSelect } from './select.state';

import { IComponent } from 'typings/component';
import { ISelectItem } from './select.typings';

import { Theme, IFlexPresetStyled } from 'themes/styles';

export interface ISelectProps extends IComponent, IFlexPresetStyled {
  selectItem: ISelectItem;
  onSelect: (data: ISelectItem) => void;
}

const SelectStyled = styled(Theme.FlexColumn)`
  position: relative;
`;

export function Select(props: ISelectProps) {
  const { selectItem, onSelect, children, className, ...styles } = props;
  const { isOpen, setOpen } = useSelect();

  const { ref } = useOutsideCall<HTMLDivElement>(() => setOpen(false));

  return (
    <SelectStyled className={className} ref={ref} {...styles}>
      <SelectProvider
        setOpen={setOpen}
        isOpen={isOpen}
        selectItem={selectItem}
        onSelect={onSelect}
      >
        {children}
      </SelectProvider>
    </SelectStyled>
  );
}

Select.Item = Item;
Select.CheckedItem = CheckedItem;
Select.Menu = Menu;
Select.Placeholder = Placeholder;
