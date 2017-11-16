import React from 'react';
import styled from 'styled-components';

import { measurements, colors } from '../../data/values.styles';
import icons from '../../images/icons.svg';

const { metadata, socialMedia } = require('../../data/config.json');

const FooterContainer = styled.footer`
  width: 100%;
  margin: 0;
  padding: ${measurements.padding.container};
  text-align: center;
  background: transparent;
  color: ${colors.secondary};
`;

const CopyrightLabel = styled.p`
  font-size: 1em;
  margin: 0;
`;

const IconsContainer = styled.div`
  margin-top: 1em;
`;

const Icon = styled.svg`
  fill: currentColor;
  stroke: none;
  width: 1.5em;
  margin: 0 0.5em;
`;

const getSocialMediaLinks = () => (
  <IconsContainer>
    {socialMedia.map(social => (
      <Icon viewBox="0 0 24 24" key={social.id}>
        <a href={social.link}>
          {/* On localhost: Unsafe attempt to load URL. Domains, protocols and ports must match. */}
          <use href={`${icons}#${social.id}`} />
        </a>
      </Icon>
    ))}
  </IconsContainer>
);

const Footer = () => (
  <FooterContainer>
    <CopyrightLabel>
      &copy; {metadata.year} {metadata.owner}
    </CopyrightLabel>
    {getSocialMediaLinks()}
  </FooterContainer>
);

export default Footer;
