import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import { measurements } from '../data/values.css';

const WidgetContainer = styled(Card)`
  max-width: calc(100vw - (${measurements.padding.container} * 4));
  overflow: auto;
  padding: 0;
`;

const Widget = styled.iframe.attrs({
  title: 'Discord Widget',
  src: 'https://discordapp.com/widget?id=404833506749841408&theme=dark',
  width: 350,
  height: 500,
  allowTransparency: true,
  frameBorder: 0,
})`
  display: block;
  max-width: 100%;
`;

const DiscordPage = () => (
  <WidgetContainer>
    <Widget />
  </WidgetContainer>
);

export default DiscordPage;
