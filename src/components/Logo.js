import React from 'react';
import styled from 'styled-components';

import { colors, opacities } from '../data/values.css';

const LogoContainer = styled.svg.attrs({
  viewBox: '0 0 29 41',
})`
  fill: ${colors.primary};
  stroke: ${colors.secondary};
  stroke-width: 0.125pt;
`;

const LogoBack = styled.path.attrs({
  d:
    'M2.5 38.938c-.24 0-.438-.195-.438-.436V3.62c0-.24.196-.436.438-.436h24.38L22.344 9.59c-.087.123-.233.196-.39.196h-9.902c-.326 0-.59.25-.59.56V17.2c0 .308.264.56.59.56h8.466c.257 0 .466.196.466.436v5.73c0 .24-.21.436-.467.436h-8.467c-.326 0-.59.252-.59.562v6.852c0 .31.264.56.59.56h9.902c.156 0 .302.074.39.197l4.534 6.406H2.5z',
})`
  fill-opacity: ${opacities.secondary};
  stroke-opacity: ${opacities.secondary};
`;

const LogoFront = styled.path.attrs({
  d:
    'M2.5 37.816c-.24 0-.438-.195-.438-.436V2.5c0-.24.196-.437.438-.437h24.38L22.344 8.47c-.087.122-.232.195-.39.195h-9.902c-.326 0-.59.25-.59.56v6.853c0 .31.264.56.59.56h8.466c.257 0 .466.197.466.437v5.73c0 .24-.21.436-.467.436h-8.467c-.326 0-.59.253-.59.563v6.852c0 .31.264.56.59.56h9.902c.157 0 .303.074.39.196l4.534 6.408H2.5z',
})``;

const Logo = ({ ...props }) => (
  <LogoContainer {...props}>
    <LogoBack />
    <LogoFront />
  </LogoContainer>
);

export default Logo;
