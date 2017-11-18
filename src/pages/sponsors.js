import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements } from '../data/values.styles';

const SponsorBannerContainer = styled.div`
  a {
    display: inline-block;
    margin: ${measurements.padding.container};
    /* opacity: 1; */

    img {
      border-radius: ${measurements.border.card};
      /* Account for padding around content container and margin around image */
      max-width: calc(100vw - (${measurements.padding.container} * 4));
      max-height: calc(100vh - (${measurements.padding.container} * 4));
    }
  }
`;

const SponsorBanner = ({ name, link, bannerImg }) => (
  <SponsorBannerContainer>
    <a href={link} title={name}>
      <img src={bannerImg} alt={name} />
    </a>
  </SponsorBannerContainer>
);

SponsorBanner.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bannerImg: PropTypes.string.isRequired,
};

const SponsorsPage = () => (
  <div>
    <SponsorBanner
      link="https://superalts.com/"
      bannerImg="https://multimc.info/assets/img/SuperAlts.gif"
      name="SuperAlts"
    />
  </div>
);

export default SponsorsPage;
