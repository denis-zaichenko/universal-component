import React, { useState } from 'react';

import { Select } from 'components/select';

export const App = () => {
  const [state, setState] = useState<TSelectItem[]>([]);

  return (
    <>
      <Select.Selector
        onSelect={setState as any}
        selectItem={state}
        removeIcon
        itemList={['Test 1', 'Test 2', 'Test 3']}
      />
      {/* <Select onSelect={setState as any} selectItem={state}>
        <Select.HeaderText />
        <Select.Menu itemList={['Test 1', 'Test 2', 'Test 3']} />
      </Select> */}
    </>
  );
};
