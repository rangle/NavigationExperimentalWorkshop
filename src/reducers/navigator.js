import { NavigationExperimental } from 'react-native';

import { NAVIGATOR } from '../actions/types';
import { SCENES } from '../constants';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

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

function navigatorReducer(state = initialState, { type, payload }) {
  const index = sceneIndex(state, payload && payload.key);

  switch (type) {
    case NAVIGATOR.PUSHED:
      if (state.routes[state.index].key === (payload && payload.key)) {
        return state;
      }
      return index === -1 ? pushScene(state, payload) : jumpToIndex(state, index);

    case NAVIGATOR.POPPED:
      if (state.index === 0 || state.routes.length === 1) {
        return state;
      }
      return popScene(state);

    case NAVIGATOR.JUMPED:
      return index === -1 ? pushScene(state, payload) : jumpToIndex(state, index);

    default:
      return state;
  }
}

export default navigatorReducer;
