import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from '../components/Logo';
import { colors } from '../data/values.css';

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
  display: block;

  /* TODO: Make this take up only rest of viewport height */
  svg {
    width: 60vw;

    &:hover {
      fill: ${colors.secondary};
      stroke: ${colors.primary};
    }
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
      <Logo />
    </LogoHomeLink>
  </FourOhFourContainer>
);

export default NotFoundPage;
