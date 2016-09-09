import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, mapProps, lifecycle } from 'recompose';

import AppScene from '../components/scene';
import { navigator } from '../actions/creators';
import { SCENES } from '../constants';

/**
 * Home Scene
 */
export default compose(
  connect(() => ({}), {
    goToScene: // TODO: implement a function to navigate to the profile scene
  }),
  defaultProps({
    name: // TODO: provide the value for name
    destination: // TODO: provide the value for destination
  }),
)(AppScene);
