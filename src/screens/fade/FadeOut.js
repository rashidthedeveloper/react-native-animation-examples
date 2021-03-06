import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export default class FadeIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(1),
      endValue: 0,
      duration: 5000,
    };
  }

  componentDidMount() {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.square, {opacity: this.state.startValue}]}
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
