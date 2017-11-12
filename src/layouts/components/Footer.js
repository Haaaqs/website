import React from 'react';
import styled from 'styled-components';

import { measurements, colors } from '../../data/values.styles';

const { metadata } = require('../../data/config.json');

const Container = styled.footer`
  width: 100%;
  margin: 0;
  padding: ${measurements.padding.container};
  text-align: center;
  background: transparent;
  color: ${colors.secondary};

  p {
    margin: 0;
  }
`;

const Footer = () => (
  <Container>
    <p>
      &copy; {metadata.year} {metadata.owner}
    </p>
  </Container>
);

export default Footer;
