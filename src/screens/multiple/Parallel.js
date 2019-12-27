import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export default class Parallel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialOpacity: new Animated.Value(1),
      initialMove: new Animated.Value(0),
      endOpacity: 0,
      endMove: 100,
      duration: 5000,
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.initialMove, {
        toValue: this.state.endMove,
        duration: this.state.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.initialOpacity, {
        toValue: this.state.endOpacity,
        duration: this.state.duration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.square,
            {
              opacity: this.state.initialOpacity,
              translateX: this.state.initialMove,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  square: {
    height: 150,
    width: 150,
    backgroundColor: 'red',
  },
});
