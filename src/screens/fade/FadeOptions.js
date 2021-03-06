import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default class FadeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('FadeIn')} text="Fade In" />
        <Button onPress={() => navigate('FadeOut')} text="Fade Out" />
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
