import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardList from '../components/CardList';
import Card from '../components/Card';

import { measurements } from '../data/values.css';

const { sponsors } = require('../data/config.json');

const SponsorBannerContainer = styled(Card)`
  margin: ${measurements.padding.container};
  padding: 0;

  a {
    display: block;

    img {
      display: block;
      max-width: calc(100vw - (${measurements.padding.container} * 4));
    }
  }
`;

const SponsorBanner = ({ name, link, imageSrc }) => (
  <SponsorBannerContainer>
    <a href={link} title={name}>
      <img src={imageSrc} alt={name} />
    </a>
  </SponsorBannerContainer>
);

SponsorBanner.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const SponsorsPage = () => (
  <CardList>
    {sponsors.map(({ id, ...props }) => <SponsorBanner key={id} {...props} />)}
  </CardList>
);

export default SponsorsPage;
