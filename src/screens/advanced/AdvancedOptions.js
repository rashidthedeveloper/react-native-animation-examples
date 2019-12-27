import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default class AdvancedOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Drag')} text="Drag a Circle" />
        <Button onPress={() => navigate('DragDrop')} text="Drag & Drop" />
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
