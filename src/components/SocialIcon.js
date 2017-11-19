import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

import { getIconPath } from '../data/icons.svg';
import { measurements, opacities } from '../data/values.styles';

const socialIconData = {
  youtube: {
    title: 'YouTube',
    color: '#ff0000',
  },
  twitter: {
    title: 'Twitter',
    color: '#1da1f2',
  },
  discord: {
    title: 'Discord',
    color: '#7289da',
  },
  github: {
    title: 'GitHub',
    color: '#24292e',
  },
  email: {
    title: 'Email',
    color: '#dd4b39',
  },
};

const SocialIconContainer = Icon.extend`
  &:hover {
    fill: ${props => props.socialColor || 'currentColor'};
    filter:
      drop-shadow(0 0 ${measurements.unit}
      rgba(0, 0, 0, ${opacities.hint}));
  }
`;

const SocialIcon = ({ id, link, ...iconProps }) => {
  const { title, color } = socialIconData[id];
  return (
    <SocialIconContainer socialColor={color} {...iconProps}>
      <a href={link}>
        <title>{title}</title>
        {getIconPath(id)}
      </a>
    </SocialIconContainer>
  );
};

SocialIcon.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialIcon;
