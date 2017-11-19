import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Divider from '../../components/Divider';

import Icon, { getIconPath } from '../../data/icons.svg';

import { hexToRgb } from '../../utils/colors';

import { measurements, colors, opacities } from '../../data/values.styles';

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

const FooterIcon = styled(Icon)`
  height: ${measurements.height.icon};
  margin: 0 0.5em;

  &:hover {
    fill: ${props => props.socialColor || 'currentColor'};
    filter: drop-shadow(0 0 ${measurements.unit} rgba(0, 0, 0, ${opacities.hint}));
  }
`;

FooterIcon.propTypes = {
  socialColor: PropTypes.string,
};

FooterIcon.defaultProps = {
  socialColor: colors.secondary,
};

const socialMediaIcons = () => (
  <div>
    {socialMedia.map(social => (
      <FooterIcon key={social.id} socialColor={social.color}>
        <a href={social.link}>
          <title>{social.title}</title>
          {getIconPath(social.id)}
        </a>
      </FooterIcon>
    ))}
  </div>
);

const Footer = () => (
  <FooterContainer>
    <p>
      &copy; {metadata.year} {metadata.owner}
    </p>
    <Divider baseColor={hexToRgb(colors.secondary)} />
    {socialMediaIcons()}
  </FooterContainer>
);

export default Footer;
