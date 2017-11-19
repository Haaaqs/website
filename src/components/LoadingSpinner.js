/*
  PAC-MAN Loading Spinner
  inspired by: https://codepen.io/_massimo/pen/JXELvz?editors=0100

  TODO: This is a proof of concept (for fun). Will probably not make it to production.
*/

/*
import React from 'react';
import styled, { keyframes } from 'styled-components';

const height = 5;
const time = 0.5;

const animPacManUp = keyframes`
  0%, 100% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(-${height * 6}deg);
  }
`;

const animPacManDown = keyframes`
  0%, 100% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(${height * 6}deg);
  }
`;

const animPacDotShift = keyframes`
  100% {
    margin-left: -1px;
  }
`;

const LoadingSpinnerContainer = styled.div``;

const PacMan = styled.div`
  &::before,
  &::after {
    content: '';
    background: yellow;
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${height * 20}px;
    height: ${height * 10}px;
    margin-left: -${height * 10}px;
  }

  &::before {
    border-radius: ${height * 10}px ${height * 10}px 0 0;
    margin-top: -${height * 10}px;
    animation: ${animPacManUp} ${time}s linear infinite;
  }

  &::after {
    border-radius: 0 0 ${height * 10}px ${height * 10}px;
    margin-top: -1px;
    animation: ${animPacManDown} ${time}s linear infinite;
  }
`;

const PacDots = styled.div`
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${height * 2}px;
  height: ${height * 2}px;
  margin-left: ${height * 6}px;
  margin-top: -${height}px;
  box-shadow:
    ${height * 6 * 1}px 0 0 white,
    ${height * 6 * 2}px 0 0 white,
    ${height * 6 * 3}px 0 0 white,
    ${height * 6 * 4}px 0 0 white;
  animation: ${animPacDotShift} ${time}s ease infinite;
`;

const LoadingSpinner = () => (
  <LoadingSpinnerContainer>
    <PacDots />
    <PacMan />
  </LoadingSpinnerContainer>
);

export default LoadingSpinner;
*/
