import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from '../components/Logo';
import { measurements, colors } from '../data/values.css';

const FourOhFourContainer = styled.div`
`;

const FourOhFourDetails = styled.div`
  margin: 0.5em
`;

const FourOhFourTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
  text-transform: lowercase;

  &::after {
    content: '.';
  }
`;

const FourOhFourDesc = styled.p`
  margin: 0;
`;

const LogoHomeLink = styled(Link)`
  display: inline-block;
`;

const LogoHome = styled(Logo)`
  width: 50vmin;
  max-width: calc(100vw - (${measurements.padding.container} * 2));

  &:hover {
    fill: ${colors.secondary};
    stroke: ${colors.primary};
  }
`;

const NotFoundPage = () => (
  <FourOhFourContainer>
    <FourOhFourDetails>
      <FourOhFourTitle>Route Not Found</FourOhFourTitle>
      <FourOhFourDesc>
        You&#39;ve lost your path. Click on the logo to get back on track.
      </FourOhFourDesc>
    </FourOhFourDetails>
    <LogoHomeLink to="/">
      <LogoHome />
    </LogoHomeLink>
  </FourOhFourContainer>
);

export default NotFoundPage;
