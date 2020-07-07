import React, { FC } from 'react';
interface ILoaderProps {
  isLoading?: boolean;
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { isLoading = true, children } = props;

  return <>{isLoading ? <div></div> : children}</>;
};
