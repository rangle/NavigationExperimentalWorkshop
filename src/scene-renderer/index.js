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

/**
 * The `NavigationExperimental.CardStack` requires a function
 * called `renderScene`
 *
 * This function receives the current navigator state: NavigationTransitionProps
 * Based on that you can return the React component you want to render. Think
 * of it as a function version of React Redux Router's:
 *
 *    <Router history={history}>
 *      <Route path="/" component={App}>
 *       <Route path="foo" component={Foo}/>
 *       <Route path="bar" component={Bar}/>
 *      </Route>
 *    </Router>
 *
 * NavigationSceneRenderer:
    https://github.com/facebook/react-native/blob/c658cc545f0e8c508ab44389deed39801f4e472c/Libraries/NavigationExperimental/NavigationTypeDefinition.js#L113
 *
 * NavigationTransitionProps:
    https://github.com/facebook/react-native/blob/c658cc545f0e8c508ab44389deed39801f4e472c/Libraries/NavigationExperimental/NavigationTypeDefinition.js#L50
 *
 * Here's a basic example:
    https://github.com/dabit3/react-native-navigator-experimental-redux/blob/part3-tabs/app/components/NavRoot.js#L27
 *
 * TODO: Implement sceneRenderer
 * We have provided a App404 component to use as fallback
 * if an invalid route type is provided.
 *
 * Note: The terms Route and Scene will used interchangeably
 * throughout this codebase.
 */
export default sceneRenderer;
