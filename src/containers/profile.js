import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, mapProps, lifecycle } from 'recompose';

import AppScene from '../components/scene';
import { navigator } from '../actions/creators';
import { SCENES } from '../constants';

/**
 * AppProfile
 */
export default compose(
  connect(() => ({}), {
    goToScene: () => navigator.onPop(),
  }),
  defaultProps({
    name: 'Profile',
    destination: 'Home',
  }),
)(AppScene);
