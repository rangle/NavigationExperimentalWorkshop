import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * This is a generic scene component that we use to
 * to build the Home and Profile views.
 * @param {function} goToScene Navigator action to go to a route of your choice
 * @param {String} name        Name of the current scene
 * @param {String} destination Name of the destination scene
 */
export default function AppScene({ goToScene, name, destination }) {
  return (
    <View style={ styles.container }>

      <View style={ styles.slab }>
        <View style={ styles.slabContent }>
          <Text style={ styles.heading }>Scene</Text>
          <Text style={ styles.title }>{ name }</Text>
        </View>

        <View style={ styles.circle } />
      </View>

      <Text style={ styles.body }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum dignissim tempor. Suspendisse porttitor mauris non lorem ullamcorper interdum. Praesent ut malesuada nisi, a maximus metus. Integer vestibulum dui ut diam laoreet elementum. Sed vestibulum efficitur imperdiet. Mauris nisi metus, efficitur vitae gravida eget, vehicula suscipit erat. Morbi pretium ipsum metus, a hendrerit massa malesuada et.</Text>

      <TouchableOpacity style={ styles.button }
        activeOpacity={ 0.5 }
        onPress={ goToScene }>
        <Text style={ styles.label }>Go to { destination } Page</Text>
      </TouchableOpacity>
    </View>
  );
}

AppScene.propTypes = {
  goToScene: PropTypes.func,
  name: PropTypes.string,
  destination: PropTypes.string,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 64 + 20,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#444',
  },
  circle: {
    backgroundColor: '#D6D6D6',
    height: 64,
    width: 64,
    borderRadius: 64,
    marginRight: 24,
  },
  heading: {
    fontSize: 17,
    color: '#767676',
  },
  slab: {
    marginHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  slabContent: {
    flex: 1,
  },
  body: {
    color: '#767676',
    fontSize: 17,
    marginHorizontal: 32,
    marginTop: 64,
  },
  label: {
    color: '#fff',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 32,
    backgroundColor: '#ff5a5f',
  }
});
