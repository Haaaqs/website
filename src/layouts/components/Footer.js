import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../../components/Icon';
import Divider from '../../components/Divider';

import { getIconPath } from '../../data/icons.svg';

import { hexToRgb } from '../../utils/colors';

import { measurements, colors, opacities } from '../../data/values.styles';

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

const FooterIcon = styled(Icon)`
  height: ${measurements.height.icon};
  margin: 0 0.5em;

  &:hover {
    fill: ${props => props.socialColor || 'currentColor'};
    filter:
      drop-shadow(0 0 ${measurements.unit}
      rgba(0, 0, 0, ${opacities.hint}));
  }
`;

FooterIcon.propTypes = {
  socialColor: PropTypes.string,
};

FooterIcon.defaultProps = {
  socialColor: colors.secondary,
};

const socialIcons = () => (
  <div>
    {social.map(({ id, title, link, color }) => (
      <FooterIcon key={id} socialColor={color}>
        <a href={link}>
          <title>{title}</title>
          {getIconPath(id)}
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
    {socialIcons()}
  </FooterContainer>
);

export default Footer;
