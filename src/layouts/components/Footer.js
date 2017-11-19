import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialIcon from '../../components/SocialIcon';
import Divider from '../../components/Divider';

import { measurements, colors } from '../../data/values.styles';

import { hexToRgb } from '../../utils/colors';

const { metadata, social } = require('../../data/config.json');

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

const FooterIcon = styled(SocialIcon)`
  height: ${measurements.height.icon};
  margin: 0 0.5em;
`;

const socialIcons = () => (
  <div>
    {social.map(({ id, link }) => (
      <FooterIcon key={id} id={id} link={link} />
    ))}
  </div>
);

const Footer = () => (
  <FooterContainer>
    <p>
      &copy; {metadata.year} {metadata.owner}
    </p>
    <Divider baseColor={hexToRgb(colors.secondary)} />
    {socialIcons()}
  </FooterContainer>
);

export default Footer;
