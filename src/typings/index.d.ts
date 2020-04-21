import React, { ReactNode, ReactElement } from 'react';

export interface IComponent {
  children?: ReactNode;
  className?: string;
}

export type FComponent<T> = (props: T & IComponent) => ReactElement;

export type TMouseEvent = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;
