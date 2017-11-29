import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

import { getIconPaths } from '../data/icons.svg';
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
  twitch: {
    title: 'Twitch',
    color: '#6441a4',
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

const SocialIconLink = styled.a`
  display: inline-block;
  height: ${measurements.height.icon};
`;

const SocialIconContainer = styled(Icon)`
  height: 100%;
  ${transitions.set('fill', 'filter')};
  will-change: filter;

  &:hover {
    fill: ${({ socialColor }) => socialColor || 'currentColor'};
    filter: drop-shadow(0 0 ${measurements.unit} rgba(0, 0, 0, ${opacities.hint}));
  }
`;

const SocialIcon = ({ id, link, ...props }) => {
  const { title, color } = socialIconData[id];
  return (
    <SocialIconLink href={link} title={title} {...props}>
      <SocialIconContainer socialColor={color}>
        {getIconPaths(id)}
      </SocialIconContainer>
    </SocialIconLink>
  );
};

SocialIcon.propTypes = {
  id: string.isRequired,
  link: string.isRequired,
};

export default SocialIcon;
