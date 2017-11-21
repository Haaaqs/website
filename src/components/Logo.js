import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import { measurements, colors, opacities } from '../data/values.css';

const pathStrokeDrawAnimation = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const pathStrokeFadeAnimation = keyframes`
  to {
    stroke-opacity: 0;
  }
`;

const pathFillFadeAnimation = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: inherit;
  }
`;

const pathAnimationStyle = css`
  stroke-dasharray: ${props => `${props.length} ${props.length}`};
  stroke-dashoffset: ${props => props.length};

  fill: transparent;
  stroke-opacity: 1;
  stroke: currentColor;
  stroke-width: 0.1;

  animation-name: ${pathStrokeDrawAnimation}, ${pathStrokeFadeAnimation}, ${pathFillFadeAnimation};
  animation-duration: 5s, 1s, 1s;
  animation-delay: 0s, 5s, 5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

const LogoContainer = styled.svg.attrs({
  viewBox: '0 0 25 37',
})`
  fill: ${colors.primary};
  padding: ${measurements.padding.container};
`;

const LogoBack = styled.path.attrs({
  d: 'M20,30.27h-9.9a.51.51,0,0,1-.53-.5V22.92a.51.51,0,0,1,.53-.5h8.47a.51.51,0,0,0,.53-.5V16.2a.51.51,0,0,0-.53-.5H10.05a.51.51,0,0,1-.53-.5V8.35a.51.51,0,0,1,.53-.5H20a.54.54,0,0,0,.44-.22L25,1.12H.5a.5.5,0,0,0-.5.5V36.5a.5.5,0,0,0,.5.5H25l-4.6-6.51A.54.54,0,0,0,20,30.27Z',
})`
  fill-opacity: ${opacities.secondary};
  ${props => (props.animate && props.pathBackLength !== null)
    && pathAnimationStyle};
`;

const LogoFront = styled.path.attrs({
  d: 'M20,29.15h-9.9a.51.51,0,0,1-.53-.5V21.8a.51.51,0,0,1,.53-.5h8.47a.51.51,0,0,0,.53-.5V15.07a.51.51,0,0,0-.53-.5H10.05a.51.51,0,0,1-.53-.5V7.23a.51.51,0,0,1,.53-.5H20a.54.54,0,0,0,.44-.22L25,0H.5A.5.5,0,0,0,0,.5V35.38a.5.5,0,0,0,.5.5H25l-4.6-6.51A.54.54,0,0,0,20,29.15Z',
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
        { refPath: this.pathBackRef, stateName: 'pathBackLength' },
        { refPath: this.pathFrontRef, stateName: 'pathFrontLength' },
      ];
      paths.forEach(this.animatePath);
    }
  };

  animatePath = ({ refPath: path, stateName }) => {
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
