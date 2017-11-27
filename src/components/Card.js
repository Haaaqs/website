import styled from 'styled-components';

import { measurements, colors, opacities, fonts, shadows, transitions } from '../data/values.css';

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

const Card = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: ${measurements.padding.container};
  border-radius: ${measurements.border.card};
  background: ${colors.secondary};
  ${shadows.box[2]}
  ${transitions.set('box-shadow')};

  &:hover {
    ${shadows.box[8]}
  }
`;

export default Card;
