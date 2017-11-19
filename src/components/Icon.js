import styled from 'styled-components';

const Icon = styled.svg.attrs({
  viewBox: '0 0 24 24',
})`
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;

  a {
    fill: inherit;
    stroke: inherit;
  }
`;

export default Icon;
