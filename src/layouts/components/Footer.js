import React from 'react';
import styled from 'styled-components';

import Divider from '../../components/Divider';

import { hexToRgb } from '../../utils/colors';

import { measurements, colors } from '../../data/values.styles';

const { metadata, socialMedia } = require('../../data/config.json');

const FooterContainer = styled.footer`
  width: 100%;
  margin: 0;
  padding: ${measurements.padding.container};
  text-align: center;
  background: transparent;
  color: ${colors.secondary};

  p {
    font-size: 1em;
    margin: 0;
  }

  hr {
    width: 50%;
    margin: 1em auto;
  }
`;

const Icon = styled.svg`
  fill: currentColor;
  stroke: none;
  height: ${measurements.height.icon};
  margin: 0 0.5em;
`;

const socialMediaIcons = () => (
  <div>
    {socialMedia.map(social => (
      <Icon viewBox="0 0 24 24" key={social.id}>
        <a href={social.link}>
          <title>{social.title}</title>
          <path d={social.icon} />
        </a>
      </Icon>
    ))}
  </div>
);

const Footer = () => (
  <FooterContainer>
    <p>
      &copy; {metadata.year} {metadata.owner}
    </p>
    <Divider color={hexToRgb(colors.secondary)} />
    {socialMediaIcons()}
  </FooterContainer>
);

export default Footer;
