import styled from 'styled-components';

import { measurements, colors, shadows } from '../data/values.styles';

const Card = styled.div`
  padding: ${measurements.padding.container};
  border-radius: ${measurements.border.card};
  background: ${colors.secondary};
  ${shadows.box[2]}

  &:hover {
    ${shadows.box[8]}
  }
`;

export default Card;
