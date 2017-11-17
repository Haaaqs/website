import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements, opacities } from '../data/values.styles';

const getColor = ({ r, g, b }, opacity) =>
  `rgba(${r}, ${g}, ${b}, ${opacity})`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  height: ${measurements.height.divider};
  background: linear-gradient(
    to right,
    ${props => getColor(props.color, 0)},
    ${props => getColor(props.color, opacities.primary)},
    ${props => getColor(props.color, 0)}
  );
`;

Divider.propTypes = {
  color: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
  }),
};

Divider.defaultProps = {
  color: {
    r: 0,
    g: 0,
    b: 0,
  },
};

export default Divider;
