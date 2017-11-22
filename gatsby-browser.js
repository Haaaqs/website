/*
  From: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions
*/

import React, { createElement } from 'react';
import { Transition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';

import getTransitionStyle from './src/utils/transitions';

const timeout = 250;
const historyExitingEventType = 'history::exiting';

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, timeout);
};

const history = createHistory({ getUserConfirmation });

history.block(location => location.pathname);
exports.replaceHistory = () => history;

class ReplaceComponentRenderer extends React.Component {
  state = { exiting: false, nextPageResources: {} };

  componentDidMount = () => {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  };

  listenerHandler = (event) => {
    this.setState({
      exiting: true,
      nextPageResources:
        this.props.loader.getResourcesForPathname(
          event.detail.pathname,
          nextPageResources => this.setState({ nextPageResources }),
        ) || {},
    });
  };

  render = () => {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
    };
    return (
      <Transition {...transitionProps}>
        {status =>
          createElement(this.props.pageResources.component, {
            ...this.props,
            ...this.props.pageResources.json,
            transition: {
              status,
              timeout,
              style: getTransitionStyle({ status, timeout }),
              nextPageResources: this.state.nextPageResources,
            },
          })
        }
      </Transition>
    );
  };
}

exports.replaceComponentRenderer = ({ props, loader }) => (
  props.layout ? undefined : createElement(ReplaceComponentRenderer, { ...props, loader })
);
