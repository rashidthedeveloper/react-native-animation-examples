import React, {Component} from 'react';
import {PanResponder, View, Animated, StyleSheet} from 'react-native';

export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
    };
    // Initialize PanResponder
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset(this.state.pan.__getValue());
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            styles.circle,
            {
              transform: [
                {translateX: this.state.pan.x},
                {translateY: this.state.pan.y},
              ],
            },
          ]}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
