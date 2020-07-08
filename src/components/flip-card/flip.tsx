import React, { ReactElement, FC } from 'react';

import { FlipStyles } from './flip.styled';

interface IFlipProps {
  frontSide: ReactElement;
  backSide: ReactElement;
  isFlipped: boolean;

  cardSize?: string;
  className?: string;
}

export const Flip: FC<IFlipProps> = (props) => {
  const { frontSide, backSide, className, isFlipped, cardSize } = props;

  return (
    <FlipStyles.Wrapper className={className} cardSize={cardSize}>
      <FlipStyles.CardWrapper isFlipped={isFlipped}>
        <FlipStyles.FrontSide>{frontSide} </FlipStyles.FrontSide>
        <FlipStyles.BackSide>{backSide}</FlipStyles.BackSide>
      </FlipStyles.CardWrapper>
    </FlipStyles.Wrapper>
  );
};
