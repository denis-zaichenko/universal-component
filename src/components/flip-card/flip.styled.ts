import styled from 'styled-components';

const CardSide = styled.div`
  backface-visibility: hidden;
  position: absolute;

  &,
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export const FlipStyles = {
  Wrapper: styled.div<{ cardSize?: string }>`
    background-color: transparent;
    width: ${(props) => props.cardSize || '300px'};
    height: ${(props) => props.cardSize || '300px'};
    perspective: 1000px;
  `,
  CardWrapper: styled.div<{ isFlipped: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    ${(props) =>
      props.isFlipped &&
      `
    transform: rotateY(180deg);
    `}
  `,
  FrontSide: CardSide,
  BackSide: styled(CardSide)`
    transform: rotateY(180deg);
  `,
};
