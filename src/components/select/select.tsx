import React, { ReactNode } from 'react';
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

import { useOutsideCall } from 'services/hooks';
import { useSelect } from './select.state';

import { Theme } from 'themes';

export interface ISelectProps {
  className?: string;
  children?: ReactNode;
  selectItem: TSelectItem[] | TSelectItem;
  onSelect: (data: TSelectItem[] | TSelectItem) => void;
}

const SelectStyled = styled(Theme.Flexbox)`
  position: relative;
`;

export const Select = (props: ISelectProps) => {
  const { selectItem, onSelect, children, className } = props;
  const { isOpen, setOpen } = useSelect();

  const ref = useOutsideCall<HTMLDivElement>(() => setOpen(false));

  return (
    <SelectStyled isColumn className={className} ref={ref}>
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
