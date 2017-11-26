import styled from 'styled-components';

import { measurements, opacities } from '../data/values.css';

import { hexToRgb } from '../utils/colors';

const getColor = ({ r, g, b }, opacity) =>
  `rgba(${r}, ${g}, ${b}, ${opacity})`;

const getBackgroundGradient = (baseColor) => {
  const rgbBaseColor = hexToRgb(baseColor);
  return `
    ${getColor(rgbBaseColor, 0)},
    ${getColor(rgbBaseColor, opacities.primary)},
    ${getColor(rgbBaseColor, 0)}
  `;
};

const Divider = styled.hr`
  margin: 0;
  border: none;
  height: ${measurements.unit};
  background: linear-gradient(
    to right,
    ${({ baseColor = '#000' }) => getBackgroundGradient(baseColor)}
  );
`;

export default Divider;
