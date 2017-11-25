import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardList from '../components/CardList';
import Card from '../components/Card';
import Image from '../components/Image';

import { measurements } from '../data/values.css';

const { sponsors } = require('../data/config.json');

const SponsorBannerContainer = styled(Card)`
  margin: ${measurements.padding.container};
  padding: 0;
  max-width: calc(100vw - (${measurements.padding.container} * 4));

  a {
    display: block;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const SponsorBanner = ({ name, link, imageSrc, ...props }) => (
  <SponsorBannerContainer {...props}>
    <a href={link} title={name}>
      <Image src={imageSrc} alt={name} />
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
