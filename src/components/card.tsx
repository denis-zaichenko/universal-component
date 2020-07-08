import React, { FC, ReactElement } from 'react';

import { Image, TImageNames } from './image';

import { Theme } from 'themes';
import styled from 'styled-components';

interface ICardProps {
  image: TImageNames;
  title: ReactElement;
  subtitle: ReactElement;

  imageSize?: string;
  className?: string;
}

const Wrapper = styled(Theme.Flexbox)`
  margin: 16px;
  width: min-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ContentWrapper = styled(Theme.Flexbox)`
  padding: 16px;
`;

export const Card: FC<ICardProps> = (props) => {
  const { image, className, children, title, subtitle, imageSize } = props;

  return (
    <Wrapper
      isColumn
      justifyContent="space-between"
      className={className}
      itemGap="16px"
    >
      <Image type={image} size={imageSize} />
      <ContentWrapper isColumn itemGap="16px">
        {title}
        {subtitle}
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};
