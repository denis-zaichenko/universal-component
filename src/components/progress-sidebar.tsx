import React, { FC } from 'react';
import styled from 'styled-components';

import { TColorNames, COLORS } from 'themes';

interface IProgressSidebarStyled {
  color: TColorNames;
  lineHeight: string;
  roundSize: string;
  itemGap: string;
}

export interface IProgressSidebarProps extends IProgressSidebarStyled {
  className?: string;
}

const Wrapper = styled.div<IProgressSidebarStyled>`
  > * {
    position: relative;
    padding-left: ${(p) => `calc(16px + ${p.roundSize} / 2)`};

    &::before {
      content: '';
      position: absolute;
      width: ${(p) => p.roundSize};
      height: ${(p) => p.roundSize};
      border-radius: 50%;
      background-color: ${(p) => COLORS[p.color]};
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &:not(:first-child)::before {
      top: calc(50% + ${(p) => p.itemGap} / 2);
    }

    &::after {
      content: '';
      width: ${(p) => p.lineHeight};
      height: 100%;
      background-color: ${(p) => COLORS[p.color]};
      position: absolute;
      left: ${(p) => `calc(-${p.lineHeight} / 2)`};
      top: 0;
    }

    &:last-child::after {
      height: ${(p) => `calc(${p.itemGap} / 2 + 50%)`};
      top: 0;
    }

    &:first-child::after {
      height: 50%;
      top: 50%;
    }

    &:first-child:last-child::after {
      display: none;
    }
  }

  > * + * {
    padding-top: ${(p) => p.itemGap};
  }
`;

export const ProgressSidebar: FC<IProgressSidebarProps> = (props) => {
  const { children, color, lineHeight, roundSize, className, itemGap } = props;

  return (
    <Wrapper
      className={className}
      color={color}
      roundSize={roundSize}
      lineHeight={lineHeight}
      itemGap={itemGap}
    >
      {children}
    </Wrapper>
  );
};
