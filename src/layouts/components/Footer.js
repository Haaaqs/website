import React from 'react';
import styled from 'styled-components';

import SocialIcon from '../../components/SocialIcon';
import Divider from '../../components/Divider';

import { measurements, colors, fonts } from '../../data/values.css';

const { metadata, social } = require('../../data/config.json');

const FooterWrapper = styled.footer`
  width: 100%;
  margin: 0;
  padding: ${measurements.padding.container};
  text-align: center;
  background: transparent;
  color: ${colors.secondary};
`;

const FooterContainer = styled.div`
  display: inline-block;
`;

const FooterDivider = styled(Divider)`
  margin: 1em auto;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: ${fonts.sizes[16]};
`;

const FooterIcon = styled(SocialIcon)`
  margin: 0 0.5em;
`;

const SocialIcons = () => (
  <div>
    {social.map(({ id, link }) => (
      <FooterIcon key={id} id={id} link={link} />
    ))}
  </div>
);

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterText>&copy; {metadata.year} {metadata.owner}</FooterText>
      <FooterDivider baseColor={colors.secondary} />
      <SocialIcons />
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
