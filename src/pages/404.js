import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import CardList from '../components/CardList';
import Logo from '../components/Logo';

import { measurements, colors, transitions } from '../data/values.css';

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

const LogoHomeContainer = styled.div`
  display: inline-block;
`;

const LogoHomeLink = styled(Link)`
  display: block;
`;

const LogoHome = styled(Logo)`
  display: block;
  width: 50vmin;
  max-width: calc(100vw - (${measurements.padding.container} * 2));
  ${transitions.set('fill', 'stroke')};

  &:hover {
    fill: ${colors.secondary};
    stroke: ${colors.primary};
  }
`;

// TODO: Add special case for 404 page with head title and content title
const NotFoundPage = () => (
  <CardList>
    <FourOhFourDetails>
      <FourOhFourTitle>Route Not Found</FourOhFourTitle>
      <FourOhFourDesc>
        You&#39;ve lost your path. Click on the logo to get back on track.
      </FourOhFourDesc>
    </FourOhFourDetails>
    <LogoHomeContainer>
      <LogoHomeLink to="/">
        <LogoHome />
      </LogoHomeLink>
    </LogoHomeContainer>
  </CardList>
);

export default NotFoundPage;
