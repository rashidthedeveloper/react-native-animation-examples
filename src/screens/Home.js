import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('FadeOptions')}
          text="Fade Animations"
        />
        <Button
          onPress={() => navigate('ScaleOptions')}
          text="Scaling Animations"
        />
        <Button
          onPress={() => navigate('MoveOptions')}
          text="Moving Animations"
        />
        <Button
          onPress={() => navigate('Interpolation')}
          text="Interpolation"
        />
        <Button onPress={() => navigate('Spring')} text="Spring Animation" />
        <Button
          onPress={() => navigate('MultipleAnimation')}
          text="Multiple Animations"
        />
        <Button onPress={() => navigate('Loop')} text="Looping Animations" />
        <Button
          onPress={() => navigate('StartStop')}
          text="Start&Stop Animations"
        />
        <Button
          onPress={() => navigate('AdvancedOptions')}
          text="Advanced Animations"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
