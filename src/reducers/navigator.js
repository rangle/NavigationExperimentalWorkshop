import { NavigationExperimental } from 'react-native';

import { NAVIGATOR } from '../actions/types';
import { SCENES } from '../constants';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

/**
 * NavigationStateUtils provides all the methods you need
 * to update the navigator state.
 *
 * This is an example of how to use these methods:
 * https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/NavigationExperimental/NavigationCardStack-example.js#L76
 */
const {
  push: pushScene,
  jumpToIndex,
  pop: popScene,
  indexOf: sceneIndex,
} = NavigationStateUtils;

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
    key: SCENES.HOME,
  }],
};

/**
 * Navigator State Reducer
 */
function navigatorReducer(state = initialState, { type, payload }) {
  const index = sceneIndex(state, payload && payload.key);

  switch (type) {
    case NAVIGATOR.PUSHED:
      // TODO: Complete the implementation for this case
      // consider the scenario where you might be pushing
      // a duplicate route

    case NAVIGATOR.POPPED:
      // TODO: Complete the implementation for this case
      // consider the scenario where you the user might
      // request pop with only one route in the stack

    case NAVIGATOR.JUMPED:
      return index === -1 ? pushScene(state, payload) : jumpToIndex(state, index);

    default:
      return state;
  }
}

export default navigatorReducer;
