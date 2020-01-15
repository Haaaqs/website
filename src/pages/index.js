import React from 'react';
import styled, { css } from 'styled-components';

import Logo from '../components/Logo';

import { getIconSvg } from '../data/icons.svg';
import { measurements, colors, opacities, fonts } from '../data/values.css';

import splashBg from '../images/index/hero-bg.jpg';

const { metadata: { title, label, owner } } = require('../data/config.json');

const fontSizeCalculation = em => `calc(${em} + 0.25vmin)`;

const textTransformStyle = textCase => css`
  text-transform: ${() => {
    switch (textCase) {
      case 'none': {
        return 'none';
      }
      case 'lower': {
        return 'lowercase';
      }
      case 'upper': {
        return 'uppercase';
      }
      default: {
        return '';
      }
    }
  }};
`;

const imageBackgroundStyle = css`
  background-color: transparent;
  background-image: url(${splashBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  width: calc(100vw - (${measurements.padding.container} * 2));
  height: calc(100vh - (${measurements.height.header} + (${measurements.padding.container} * 2)));
  padding: ${measurements.padding.container};
  background: transparent;
  color: ${colors.secondary};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100vh;
    z-index: -1;
    filter: brightness(0.25);
    ${imageBackgroundStyle};
  }
`;

const IndexLogo = styled(Logo)`
  width: 100%;
  max-width: 50vw;
  max-height: 50vh;
`;

const IndexInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${measurements.padding.container};
`;

const IndexInfoTitle = styled.h1`
  margin: 0;
  display: block;
  font-size: ${fontSizeCalculation(fonts.sizes[48])};
  font-weight: normal;
`;

const IndexInfoAuthor = styled.h2`
  margin: 0;
  display: block;
  font-size: ${fontSizeCalculation(fonts.sizes[16])};
  font-weight: normal;
`;

const IndexInfoTextBold = styled.strong`
  opacity: ${opacities.primary};
  ${({ textCase }) => textTransformStyle(textCase)};
`;

const IndexInfoTextRegular = styled.span`
  opacity: ${opacities.secondary};
  ${({ textCase }) => textTransformStyle(textCase)};
`;

const IndexInfoIconWrapper = styled.div`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
`;

const IndexInfoButton = styled.a.attrs({
  role: 'button',
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${measurements.padding.container};
  font-size: ${fontSizeCalculation(fonts.sizes[16])};
`;

const IndexPage = () => (
  <IndexContainer>
    <IndexInfoContainer>
      <IndexInfoTitle>
        {title
          .split(' ')
          .map(word => ((word === label)
            ? <IndexInfoTextBold key={word} textCase="upper">{word}</IndexInfoTextBold>
            : <IndexInfoTextRegular key={word} textCase="upper">{word}</IndexInfoTextRegular>
          ))}
      </IndexInfoTitle>
      <div>
        <IndexInfoButton href="http://ad.envyclient.com/1">
          <IndexInfoTextRegular textCase="lower">Download&nbsp;</IndexInfoTextRegular>
          <IndexInfoTextBold textCase="lower">{label}</IndexInfoTextBold>
        </IndexInfoButton>
        |
        <IndexInfoButton href="https://forums.envyclient.com/">
          <IndexInfoTextRegular textCase="lower">Fourms</IndexInfoTextRegular>
        </IndexInfoButton>
      </div>
    </IndexInfoContainer>
    <IndexLogo />
  </IndexContainer>
);

export default IndexPage;
