import React from 'react';
import styled from 'styled-components';

import {
  Item,
  Header,
  Menu,
  Placeholder,
  HeaderText,
  TextItem,
  ItemIcon,
} from './components';
import { SelectProvider } from './select.context';

import { useOutsideCall } from 'hooks';
import { useSelect } from './select.state';

import { IComponent } from 'typings/component';
import { ISelectItem } from './select.typings';

import { Theme, IFlexPresetStyled } from 'themes/styles';

export interface ISelectProps extends IComponent, IFlexPresetStyled {
  selectItem: ISelectItem[] | ISelectItem;
  onSelect: (data: ISelectItem[] | ISelectItem) => void;
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

Select.Menu = Menu;
Select.Placeholder = Placeholder;

Select.Item = Item;
Select.ItemIcon = ItemIcon;
Select.TextItem = TextItem;

Select.Header = Header;
Select.HeaderText = HeaderText;
