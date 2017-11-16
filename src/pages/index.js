import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import { measurements, colors, opacities } from '../data/values.styles';

const imageBackgroundStyle = css`
  background-color: transparent;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, ${opacities.secondary}),
      rgba(0, 0, 0, ${opacities.secondary})
    ),
    url('https://source.unsplash.com/random');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${measurements.height.header});
  background: transparent;
  color: ${colors.secondary};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    z-index: -1;
    ${imageBackgroundStyle};
  }
`;

const IndexPage = () => (
  <IndexContainer>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </IndexContainer>
);

export default IndexPage;
