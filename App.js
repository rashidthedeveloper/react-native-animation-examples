import React, {Component} from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import FadeOptions from './src/screens/fade/FadeOptions';
import FadeIn from './src/screens/fade/FadeIn';
import FadeOut from './src/screens/fade/FadeOut';

const AppNavigator = createStackNavigator({
  Home,
  FadeOptions,
  FadeIn,
  FadeOut,
});

const Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Navigation />
      </SafeAreaView>
    );
  }
}
