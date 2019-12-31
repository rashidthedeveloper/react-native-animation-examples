import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export default class Loop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(1),
      endValue: 1.5,
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.spring(this.state.startValue, {
        toValue: this.state.endValue,
        friction: 1,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.square,
            {
              transform: [
                {
                  scale: this.state.startValue,
                },
              ],
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});
