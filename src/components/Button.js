import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
