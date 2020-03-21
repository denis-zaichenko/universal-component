import { ReactNode, FC } from 'react';

export interface IComponent {
  children?: ReactNode;
  className?: string;
}

export type TFComponent<P> = FC<P & IComponent>;
