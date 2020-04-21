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
  PlaceholderWithRemove,
  Selector,
} from './components';
import { SelectProvider } from './select.context';

import { useOutsideCall } from 'services';
import { useSelect } from './select.state';

import { IComponent } from 'typings';

import { Theme, IFlexPresetStyled } from 'themes';

export interface ISelectProps {
  selectItem: TSelectItem[] | TSelectItem;
  onSelect: (data: TSelectItem[] | TSelectItem) => void;
  flexStyled?: IFlexPresetStyled;
}

const SelectStyled = styled(Theme.FlexColumn)`
  position: relative;
`;

export const Select = (props: ISelectProps & IComponent) => {
  const { selectItem, onSelect, children, className, flexStyled } = props;
  const { isOpen, setOpen } = useSelect();

  const { ref } = useOutsideCall<HTMLDivElement>(() => setOpen(false));

  return (
    <SelectStyled className={className} ref={ref} {...flexStyled}>
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
};

Select.Menu = Menu;

Select.Placeholder = Placeholder;
Select.PlaceholderWithRemove = PlaceholderWithRemove;

Select.Item = Item;
Select.ItemIcon = ItemIcon;
Select.TextItem = TextItem;

Select.Header = Header;
Select.HeaderText = HeaderText;

Select.Selector = Selector;
