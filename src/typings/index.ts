import React from 'react';

export type TMouseEvent = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;

export type TChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;
