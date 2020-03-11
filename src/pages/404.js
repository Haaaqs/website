import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/layout';

import CardList from '../components/CardList';
import Logo from '../components/Logo';

import { measurements, colors, transitions } from '../data/values.css';

const FourOhFourDetails = styled.div`
  margin: 0.5em;
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

const NotFoundPage = ({ children, location }) => (
  <Layout children={children} location={location}>
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
  </Layout>
);

export default NotFoundPage;
