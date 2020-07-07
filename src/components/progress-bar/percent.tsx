import React, { FC } from 'react';

import { Progress, IProgressIdenticalProps } from './progress';

export interface IPercentProps extends IProgressIdenticalProps {
  className?: string;

  percent: number;
}

export const Percent: FC<IPercentProps> = (props) => {
  const {
    className,
    backgroundColor,
    percent,
    progressColor,
    borderColor,
  } = props;

  return (
    <Progress
      className={className}
      backgroundColor={backgroundColor}
      progressColor={progressColor}
      completePoint={percent}
      maxPoint={100}
      borderColor={borderColor}
    />
  );
};
