import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export default class MoveXY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.ValueXY(0, 0),
      endValue: 150,
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
              transform: [
                {
                  translateX: this.state.startValue.x,
                  translateY: this.state.startValue.y,
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
    backgroundColor: 'blue',
  },
});
