import styled from 'styled-components';

import { measurements, colors, shadows } from '../../data/values.styles';

const Content = styled.main`
  flex: 1 0 auto;
  width: 100%;
  margin: 0;
  margin-top: ${measurements.height.header};
  padding: ${measurements.padding.container};
  background: ${colors.background};
  ${shadows.box[16]};
`;

export default Content;
