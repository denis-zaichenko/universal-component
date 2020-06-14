import React, { FC } from 'react';
import styled from 'styled-components';

import { TColorNames, COLORS } from 'themes';

interface IProgressIdenticalProps {
  progressColor: TColorNames;
  backgroundColor: TColorNames;
}

interface IProgressStyled extends IProgressIdenticalProps {
  completePercent: number;
}

export interface IProgressProps extends IProgressIdenticalProps {
  className?: string;
  completePoint: number;
  maxPoint: number;
}

const ProgressBar = styled.div<IProgressStyled>`
  position: relative;
  border-radius: 5px;
  width: 100%;
  height: 10px;
  background-color: ${(p) => COLORS[p.backgroundColor]};

  &::after {
    content: '';
    left: 0;
    height: 10px;
    position: absolute;
    border-radius: 5px;
    background-color: ${(p) => COLORS[p.progressColor]};
    width: ${(p) => p.completePercent}%;
  }
`;

export const Progress: FC<IProgressProps> = (props) => {
  const {
    className,
    completePoint,
    maxPoint,
    progressColor,
    backgroundColor,
  } = props;

  const COMPLETE_PERCENT = (100 * completePoint) / maxPoint;

  return (
    <ProgressBar
      completePercent={COMPLETE_PERCENT}
      progressColor={progressColor}
      backgroundColor={backgroundColor}
      className={className}
    />
  );
};
