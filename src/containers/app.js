import R from 'ramda';
import { connect } from 'react-redux';
import { BackAndroid, NavigationExperimental } from 'react-native';
import { compose, defaultProps, mapProps, lifecycle } from 'recompose';

import { navigator } from '../actions/creators';
import renderScene from '../scene-renderer';

/**
 * App Component
 *
 * This is the root component of the app. In this case it is simply the
 * `NavigationExperimental.CardStack` with appropriate props and config.
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
  // TODO: for mapStateToProps provide navigationState
  // TODO: for mapDispatchToProps: provide the navigator actions
  connect(/* mapStateToProps goes here */, /* mapDispatchToProps goes here */),
  // mapProps accepts a function that maps the components props to a new
  // collection of props. We are using it here to generate onNavigateBack
  // prop.
  //
  // This prop is a function that is fired if the user triggers back actions
  // for example edge swipe back
  // collection of props. We are using it here to generate the onNavigateBack
  // function.
  mapProps(({ onPop, onPush, navigationState }) => ({
    onNavigateBack: () => {
      // TODO: implement this function
    },
    navigationState,
  })),
  // Setting the value for direction and renderScene props here –
  // using recompose's defaultprops method:
  defaultProps({ direction: 'horizontal', renderScene }),
  // We are connecting the Android back button to the navigator back actions
  //  here. To do so, we addEventListener on component mount and then
  //  unsubscribe when the component will unmount.
  //
  // Again, using recompose instead of creating a stateful component.
  lifecycle({
    componentWillMount() {
      const { onNavigateBack } = this.props;
      BackAndroid.addEventListener('hardwareBackPress', onNavigateBack);
    },
    componentWillUnmount() {
      const { onNavigateBack } = this.props;
      BackAndroid.removeEventListener('hardwareBackPress', onNavigateBack);
    }
  })
)(NavigationExperimental.CardStack);
