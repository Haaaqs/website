import React from 'react';
import styled, { css } from 'styled-components';

import Logo from '../components/Logo';
import { measurements, colors, opacities } from '../data/values.css';

import splashBg from '../images/index/splash-bg.jpg';

const { metadata: { title, label, owner } } = require('../data/config.json');

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: calc(100vw - (${measurements.padding.container} * 2));
  height: calc(100vh - (${measurements.height.header} + (${measurements.padding.container} * 2)));
  padding: ${measurements.padding.container};
  background: transparent;
  color: ${colors.secondary};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: ${opacities.primary};
    /* FIXME: Fixed background image with filter produces janky positioning and scrolling on Firefox */
    filter: brightness(${opacities.secondary});
    ${imageBackgroundStyle}
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

const IndexPage = () => (
  <IndexContainer>
    {/* TODO: Prototype, not final */}
    <Logo
      animated
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '50vw',
        maxHeight: '50vh',
      }}
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: measurements.padding.container,
      }}
    >
      <h1
        style={{
          margin: 0,
          display: 'block',
          fontSize: '5vmin',
          fontWeight: 'normal',
          opacity: opacities.primary,
          textTransform: 'uppercase',
        }}
      >
        {title.split(' ').map((word, index) => (
            word === label ? (
              // eslint-disable-next-line react/no-array-index-key
              <strong key={index} style={{ fontWeight: 'bold' }}>
                {word}
              </strong>
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <span key={index} style={{ opacity: opacities.secondary }}>
                {word}
              </span>
            )
        ))}
      </h1>
      <p
        style={{
          margin: 0,
          display: 'block',
          fontSize: '2vmin',
          opacity: opacities.primary,
          textTransform: 'lowercase',
        }}
      >
        <span style={{ opacity: opacities.secondary }}>Developed by</span>{' '}
        <strong style={{ textTransform: 'none' }}>{owner}</strong>
      </p>
      <a
        style={{
          margin: measurements.padding.container,
          fontSize: '2vmin',
          opacity: opacities.primary,
          textTransform: 'lowercase',
        }}
        href="http://ad.envyclient.com/1"
        role="button"
      >
        Download <strong>{label}</strong>
      </a>
    </div>
  </IndexContainer>
);

export default IndexPage;
