import React from 'react';
import { string } from 'prop-types';

import Icon from './Icon';

import { getIconPath } from '../data/icons.svg';
import { measurements, opacities, transitions } from '../data/values.css';

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
  height: ${measurements.height.icon};
  ${transitions.set('fill', 'filter')};

  &:hover {
    fill: ${({ socialColor }) => socialColor || 'currentColor'};
    filter: drop-shadow(0 0 ${measurements.unit} rgba(0, 0, 0, ${opacities.hint}));
  }
`;

const SocialIcon = ({ id, link, ...props }) => {
  const { title, color } = socialIconData[id];
  return (
    <SocialIconContainer socialColor={color} {...props}>
      <a href={link}>
        <title>{title}</title>
        {getIconPath(id)}
      </a>
    </SocialIconContainer>
  );
};

SocialIcon.propTypes = {
  id: string.isRequired,
  link: string.isRequired,
};

export default SocialIcon;
