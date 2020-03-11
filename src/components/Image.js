import React from 'react';
import styled, { keyframes } from 'styled-components';
import Img from 'react-image';

import { measurements } from '../data/values.css';

const ellipseAnimation = keyframes`
  0% {
    content: '';
  }

  33% {
    content: '.';
  }

  67% {
    content: '..';
  }

  100% {
    content: '...';
  }
`;

const Text = styled.div`
  margin: ${measurements.padding.container};
  font-size: 1em;
`;

export const LoadingText = styled(Text)`
  &::before {
    content: 'Loading';
  }

  &::after {
    content: '';
    animation: ${ellipseAnimation} 1s ease infinite alternate;
  }
`;

const Image = ({ ...props }) => (
  <Img loader={<LoadingText />} {...props} />
);

export default Image;
