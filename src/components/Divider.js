import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements, opacities } from '../data/values.styles';

const getColor = ({ r, g, b }, opacity) =>
  `rgba(${r}, ${g}, ${b}, ${opacity})`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  height: ${measurements.unit};
  background: linear-gradient(
    to right,
    ${props => getColor(props.baseColor, 0)},
    ${props => getColor(props.baseColor, opacities.primary)},
    ${props => getColor(props.baseColor, 0)}
  );
`;

Divider.propTypes = {
  baseColor: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
  }),
};

Divider.defaultProps = {
  baseColor: {
    r: 0,
    g: 0,
    b: 0,
  },
};

export default Divider;
