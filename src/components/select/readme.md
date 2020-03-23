# Select component

#### All components can be easily modified with help styled-components.

Custom Select component, what creates with help React.js and styled-components.
This component has a tree structure from the element.
The Select component has inside Select Context, what passes from all elements open/close state, select element/s, and function, what set his value.

###### This Select can work in one or multi-select regime.

#### All component have children and you can add any component inside.

## Base structure

```tsx
<Select onSelect={setValue} selectItem={value}>
  <Select.HeaderText />
  <Select.Menu itemList={['Test 1', 'Test 2', 'Test 3']} />
</Select>
```

## Select

Select - the main component. Using like wrapper to all components.

props:

- onSelect: (data: ISelectItem | ISelectItem[]) => void; => Function set value to selectItem.
- selectItem: ISelectItem | ISelectItem[] => value, what update with help select.

#### If pass array, then Select work like multi-select and add/remove an element in an array. If pass object, then Select update this object.

- selectItem?: ISelectItem | ISelectItem[]; => Value, what selected.

## Header

### Header

The component contains Item/Items, and on click, will open a list with Items.
The Header - flex styled component.

Props:

- flexStyled?: IFlexStyled; => styles from Header;

### HeaderText

The component contains Placeholder(one-select regime), or a list of Placeholders(multi-select regime).
This component-based from the Header.

Props:

- flexStyled?: IFlexStyled; => styles from Header;
- textStyled?: ITextStyled; => styles from text in Placeholder;

## Menu

The component contains a list of Items.

Props:

- topGap?: string; => distance between Header and Menu after dropdown;
- itemList?: TSelectItem[]; => list with Items, if you don't want to create custom styled Item, then create TextItem or IconItem;

## Item

The component has contained a select item. On click, this element set selectItem.
This component is flex styled.

### Item

Item, on click, update selectItem.

props:

- value: ISelectItem => value, what on click, set this element;

### TextItem

Inside this component has a Placeholder, and passed value used to him too.
This component builder from Item;

props:

- value: ISelectItem => value what set on click this element;
- textStyled?: ITextStyled => styles from text in Placeholder

### IconItem

Inside this component has Placeholder and Icon;
This component-based from the Item;

props:

- value: ISelectItem => value what set on click this element;
- textStyled?: ITextStyled; => styles from text in Placeholder
- iconParameters: IIconProps; => Icon parament and styles

## Placeholder

Text display object create with help interface ISelectItem;
props:

-- selectItem: ISelectItem; => item what print in this element; placeholder?: string; => default text what display if selectItem have empty value;

- textStyled?: ITextStyled; => styles from text in Placeholder;
