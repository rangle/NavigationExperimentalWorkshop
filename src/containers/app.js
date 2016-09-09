import R from 'ramda';
import { connect } from 'react-redux';
import { BackAndroid, NavigationExperimental } from 'react-native';
import { compose, defaultProps, mapProps, lifecycle } from 'recompose';

import { navigator } from '../actions/creators';
import renderScene from '../scene-renderer';

/**
 * App Component
 *
 * Instead of creating stateful component we are using Recompose. This is not
 * requirement for React Native and/or NavigationExperimental. You can write
 * your app using stateful component instead and it will work just fine.
 *
 * Using Recompose is sort of a community best practice for React that we
 * are adopting at Rangle.io.
 *
 * For more on Recompose see:
 *  - https://github.com/acdlite/recompose#recompose
 *  - https://github.com/acdlite/recompose/blob/master/docs/API.md
 */
export default compose(
  // This is the usual Redux connect which is made up of:
  // mapStateToProps and mapDispatchToProps
  connect(R.pick(['navigationState']), navigator),
  // mapProps accepts a function that maps the components props to a new
  // collection of props. We are using it here to generate the onNavigate
  // and handleBackAction functions.
  mapProps(({ onPop, onPush, navigationState }) => ({
    onNavigate: ({ type, route }) => {
      switch(type) {
        case 'push':
          onPush(route);
          return true;
        case 'back':
        case 'pop':
          onPop();
          return true;
        default:
          return false;
      }
    },
    handleBackAction: () => { onPop(); return true; },
    navigationState,
  })),
  // Setting the value for direction and renderScene props here –
  // using recompose's defaultprops method:
  defaultProps({ direction: 'horizontal', renderScene }),
  // We are connecting the Android back button to the navigator actions here
  // To do so, we addEventListener on component mount and then unsubscribe
  // when the component will unmount.
  // Again, using recompose instead of creating a stateful component.
  lifecycle({
    componentWillMount() {
      const { handleBackAction } = this.props;
      BackAndroid.addEventListener('hardwareBackPress', handleBackAction);
    },
    componentWillUnmount() {
      const { handleBackAction } = this.props;
      BackAndroid.removeEventListener('hardwareBackPress', handleBackAction);
    }
  })
)(NavigationExperimental.CardStack);
