import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export default class MoveY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endValue: 150,
      duration: 8000,
    };
  }

  componentDidMount() {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(this.state.startValue).stop();
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.square,
            {
              translateY: this.state.startValue,
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
