import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default class MoveOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('MoveX')} text="Move X" />
        <Button onPress={() => navigate('MoveY')} text="Move Y" />
        <Button onPress={() => navigate('MoveXY')} text="Move XY" />
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
