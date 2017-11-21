import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import { colors, opacities } from '../data/values.css';

const pathDrawAnimation = keyframes`
  0% {
    stroke-width: inherit;
    fill: transparent;
  }

  85% {
    stroke-dashoffset: 0px;
    stroke-width: inherit;
    fill: transparent;
  }

  100% {
    stroke-dashoffset: 0px;
    stroke-width: 0;
    fill: inherit;
  }
`;

const pathAnimationStyle = css`
  stroke-dasharray: ${props => `${props.length}px ${props.length}px`};
  stroke-dashoffset: ${props => props.length}px;

  animation-name: ${pathDrawAnimation};
  animation-duration: 5s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
`;

const LogoContainer = styled.svg.attrs({
  viewBox: '0 0 29 41',
})`
  fill: ${colors.primary};
  stroke: ${colors.secondary};
  stroke-width: ${0.25 / 16}em;
`;

const LogoBack = styled.path.attrs({
  d: 'M21.95 32.27h-9.9c-.29 0-.53-.22-.53-.5v-6.85c0-.28.24-.5.53-.5h8.47c.29 0 .53-.22.53-.5V18.2c0-.28-.24-.5-.53-.5h-8.47c-.29 0-.53-.22-.53-.5v-6.85c0-.28.24-.5.53-.5h9.9c.18 0 .34-.08.44-.22L27 3.12H2.5c-.28 0-.5.22-.5.5V38.5c0 .28.22.5.5.5H27l-4.6-6.51c-.1-.13-.27-.22-.45-.22z',
})`
  fill-opacity: ${opacities.secondary};
  stroke-opacity: ${opacities.secondary};
  ${props => (props.animate && props.pathBackLength !== null)
    && pathAnimationStyle};
`;

const LogoFront = styled.path.attrs({
  d: 'M21.95 31.15h-9.9c-.29 0-.53-.22-.53-.5V23.8c0-.28.24-.5.53-.5h8.47c.29 0 .53-.22.53-.5v-5.74c0-.28-.24-.5-.53-.5h-8.47c-.29 0-.53-.22-.53-.5V9.23c0-.28.24-.5.53-.5h9.9c.18 0 .34-.08.44-.22L27 2H2.5c-.28 0-.5.22-.5.5v34.88c0 .28.22.5.5.5H27l-4.6-6.51c-.1-.14-.27-.22-.45-.22z',
})`
  ${props => (props.animate && props.pathFrontLength !== null)
    && pathAnimationStyle};
`;

class Logo extends Component {
  static propTypes = {
    animated: PropTypes.bool,
  };

  static defaultProps = {
    animated: false,
  };

  state = { pathBackLength: null, pathFrontLength: null };

  componentDidMount = () => {
    if (this.props.animated) {
      const paths = [
        { pathRef: this.pathBackRef, stateName: 'pathBackLength' },
        { pathRef: this.pathFrontRef, stateName: 'pathFrontLength' },
      ];
      paths.forEach(this.animatePath);
    }
  };

  animatePath = ({ pathRef: path, stateName }) => {
    const length = path.getTotalLength();
    this.setState({ [stateName]: length });
  };

  render = () => (
    <LogoContainer {...this.props}>
      <LogoBack
        animate={this.props.animated}
        length={this.state.pathBackLength}
        innerRef={(pathBack) => {
          this.pathBackRef = pathBack;
        }}
      />
      <LogoFront
        animate={this.props.animated}
        length={this.state.pathFrontLength}
        innerRef={(pathFront) => {
          this.pathFrontRef = pathFront;
        }}
      />
    </LogoContainer>
  );
}

export default Logo;
