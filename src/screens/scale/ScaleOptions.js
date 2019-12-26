import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default class ScaleOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('ScaleX')} text="Scale X" />
        <Button onPress={() => navigate('ScaleY')} text="Scale Y" />
        <Button onPress={() => navigate('ScaleXY')} text="Scale XY" />
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
});
