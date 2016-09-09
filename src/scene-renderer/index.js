import React from 'react';
import { View, Text } from 'react-native';
import * as R from 'ramda';

import { SCENES } from '../constants';
import AppHome from '../containers/home';
import AppProfile from '../containers/profile';

const App404 = () => (
  <View>
    <Text>Navigation State Not Found</Text>
  </View>
);

const getScene = R.cond([
  [R.equals(SCENES.HOME), () => <AppHome />],
  [R.equals(SCENES.PROFILE), () => <AppProfile />],
  [R.T(), R.always(<App404 />)],
]);

const sceneRenderer = R.compose(
  getScene,
  R.replace(/^scene_/, ''),
  R.path(['scene', 'key'])
);

export default sceneRenderer;
