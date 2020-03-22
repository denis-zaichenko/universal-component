import React, { useState } from 'react';
import { Select, ISelectItem } from 'components/select';

export const App = () => {
  const [state, setState] = useState<ISelectItem>({ value: '' });
  const set = (item: ISelectItem[] | ISelectItem) => setState(item as any);
  return (
    <>
      <Select onSelect={set} selectItem={state}>
        <Select.HeaderText />
        <Select.Menu itemList={['Test 1', 'Test 2', 'Test 3']} />
      </Select>
    </>
  );
};
