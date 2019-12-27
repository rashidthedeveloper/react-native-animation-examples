import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default class MultipleAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Sequence')} text="Sequence" />
        <Button onPress={() => navigate('Parallel')} text="Parallel" />
        <Button onPress={() => navigate('Delay')} text="Delay" />
        <Button onPress={() => navigate('Stagger')} text="Stagger" />
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
