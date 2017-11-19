import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements, opacities } from '../data/values.styles';

import { hexToRgb } from '../utils/colors';

const getColor = ({ r, g, b }, opacity) =>
  `rgba(${r}, ${g}, ${b}, ${opacity})`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  height: ${measurements.unit};
  background: linear-gradient(
    to right,
    /* Ouch for performance */
    ${props => getColor(hexToRgb(props.baseColor), 0)},
    ${props => getColor(hexToRgb(props.baseColor), opacities.primary)},
    ${props => getColor(hexToRgb(props.baseColor), 0)}
  );
`;

Divider.propTypes = {
  baseColor: PropTypes.string,
};

Divider.defaultProps = {
  baseColor: '#000',
};

export default Divider;
