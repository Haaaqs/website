import React from 'react';
import { string } from 'prop-types';

import Card from '../components/Card';

import { measurements } from '../data/values.css';

const { sponsors } = require('../data/config.json');

const SponsorBannerContainer = Card.extend`
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
  name: string.isRequired,
  link: string.isRequired,
  imageSrc: string.isRequired,
};

const SponsorsPage = () => (
  <div>
    {sponsors.map(({ id, ...props }) => <SponsorBanner key={id} {...props} />)}
  </div>
);

export default SponsorsPage;
