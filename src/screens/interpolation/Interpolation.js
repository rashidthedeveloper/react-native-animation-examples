import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export default class FadeIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endValue: 1,
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
          style={[
            styles.square,
            {
              opacity: this.state.startValue,
              transform: [
                {
                  translateY: this.state.startValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
                    extrapolate: 'clamp',
                  }),
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
});
