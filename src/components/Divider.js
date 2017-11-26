import styled from 'styled-components';
import { measurements, opacities } from '../data/values.css';

import { hexToRgb } from '../utils/colors';
import { strip } from '../utils/strings';

const getColor = ({ r, g, b }, opacity) => `rgba(${r}, ${g}, ${b}, ${opacity})`;

const getBackgroundGradient = (baseColor, align) => {
  const rgbBaseColor = hexToRgb(baseColor);
  return `
    ${align !== 'start' ? getColor(rgbBaseColor, 0) : ''},
    ${getColor(rgbBaseColor, opacities.primary)},
    ${align !== 'end' ? getColor(rgbBaseColor, 0) : ''}
  `;
};

const Divider = styled.hr`
  margin: 0;
  border: none;
  height: ${measurements.unit};
  background: linear-gradient(
    to right,
    ${({ baseColor = '#000', align }) => strip(getBackgroundGradient(baseColor, align).trim(), ',')}
  );
`;

export default Divider;
