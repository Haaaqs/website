import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements } from '../data/values.styles';

const { sponsors } = require('../data/config.json');

const SponsorBannerContainer = styled.div`
  margin: ${measurements.padding.container};

  a {
    display: inline-block;
    /* opacity: 1; */

    img {
      border-radius: ${measurements.border.card};
      /* Account for padding around content container and margin around image */
      max-width: calc(100vw - (${measurements.padding.container} * 4));
      max-height: calc(100vh - (${measurements.padding.container} * 4));
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
  <div>
    {sponsors.map(({ name, link, imageSrc }) => (
      <SponsorBanner key={name} name={name} link={link} imageSrc={imageSrc} />
    ))}
  </div>
);

export default SponsorsPage;
