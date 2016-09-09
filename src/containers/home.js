import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, mapProps, lifecycle } from 'recompose';

import AppScene from '../components/scene';
import { navigator } from '../actions/creators';
import { SCENES } from '../constants';

/**
 * AppHome
 */
export default compose(
  connect(() => ({}), {
    goToScene: () => navigator.onPush({ key: SCENES.PROFILE }),
  }),
  defaultProps({
    name: 'Home',
    destination: 'Profile',
  }),
)(AppScene);
