import React from 'react';
import styled from 'styled-components';

import { CardLiftTransition } from '../components/CardList';

import { measurements, colors, opacities, fonts, shadows } from '../data/values.css';

export const Title = styled.h3`
  margin: ${4 / 16}em 0;
  font-size: ${fonts.sizes[18]};
  font-weight: bold;
  text-shadow: 0 ${measurements.unit} ${colors.primary};
  opacity: ${opacities.primary};
`;

export const Info = styled.p`
  margin: 0;
  font-size: ${fonts.sizes[14]};
  font-weight: normal;
  opacity: ${opacities.secondary};
`;

const CardStyle = styled(CardLiftTransition)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: ${measurements.padding.container};
  border-radius: ${measurements.border.card};
  background: ${colors.secondary};
  ${shadows.box[2]}

  &:hover {
    ${shadows.box[8]}
  }
`;

// FIXME: Unknown prop `index` on <div> tag
const Card = ({ children, ...props }) => (
  <CardStyle {...props}>
    <div>
      {children}
    </div>
  </CardStyle>
);

export default Card;
