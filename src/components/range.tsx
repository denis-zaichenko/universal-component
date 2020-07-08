import React, { FC } from 'react';
import styled from 'styled-components';

import { TColorNames } from 'themes';

interface IRangeProps extends IRangeStyled {
  maximal: number;
  value: number;
  step: number;
  setValue(value: number): void;

  minimal?: number;
}

interface IRangeStyled {
  rangeBackground: TColorNames;
  sliderColor: TColorNames;

  sliderSize?: string;
  isSquare?: boolean;
}

const SliderStyled = styled.input<IRangeStyled>`
  -webkit-appearance: none;
  outline: none;
  width: 100%;
  height: 10px;
  background: ${(props) => props.rangeBackground};
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 10px;

  &::-webkit-slider-thumb {
    // support +89.39%
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    width: ${(props) => props.sliderSize};
    height: ${(props) => props.sliderSize};
    background: ${(props) => props.sliderColor};
    border-radius: ${(props) => !props.isSquare && '50%'};
  }

  &::-moz-range-thumb {
    // + 4.3% support
    cursor: pointer;

    width: ${(props) => props.sliderSize};
    height: ${(props) => props.sliderSize};
    background: ${(props) => props.sliderColor};

    border-radius: ${(props) => !props.isSquare && '50%'};
  }
`; // support input type 96.97% and slider 93.69%

export const Slider: FC<IRangeProps> = (props) => {
  const {
    value,
    maximal,
    setValue,
    isSquare,
    step,
    minimal = 0,
    sliderColor = 'black',
    sliderSize = '18px',
    rangeBackground = 'white',
  } = props;

  return (
    <SliderStyled
      type="range"
      rangeBackground={rangeBackground}
      sliderColor={sliderColor}
      sliderSize={sliderSize}
      min={minimal}
      max={maximal}
      value={value}
      step={step}
      onChange={(e) => setValue(+e.target.value)}
      isSquare={isSquare}
    />
  );
};
