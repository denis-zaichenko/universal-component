import React, { FC } from 'react';
import styled from 'styled-components';

import { TColorNames } from 'themes';

export enum LoaderAnimationSpeed {
  Slow = '2s',
  Medium = '1s',
  Fast = '0.5s',
  VeryFast = '0.2s',
}

interface ILoaderStyled {
  size?: string;
  speed?: LoaderAnimationSpeed;

  loaderColor: TColorNames;
  backgroundColor: TColorNames;
}

interface ILoaderProps extends ILoaderStyled {
  isLoading?: boolean;
}

const LoaderStyled = styled.div<ILoaderStyled>`
  border: 16px solid ${(props) => props.backgroundColor};
  border-top: 16px solid ${(props) => props.loaderColor};
  border-radius: 50%;
  width: ${(props) => props.size || '120px'};
  height: ${(props) => props.size || '120px'};
  animation: spin ${(props) => props.speed || LoaderAnimationSpeed.Medium}
    linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader: FC<ILoaderProps> = (props) => {
  const { isLoading = true, children, ...loaderStyled } = props;

  return <>{isLoading ? <LoaderStyled {...loaderStyled} /> : { children }}</>;
};
