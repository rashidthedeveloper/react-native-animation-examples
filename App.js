import React, {Component} from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import FadeOptions from './src/screens/fade/FadeOptions';
import FadeIn from './src/screens/fade/FadeIn';
import FadeOut from './src/screens/fade/FadeOut';
import ScaleOptions from './src/screens/scale/ScaleOptions';
import ScaleX from './src/screens/scale/ScaleX';
import ScaleY from './src/screens/scale/ScaleY';
import ScaleXY from './src/screens/scale/ScaleXY';
import MoveOptions from './src/screens/move/MoveOptions';
import MoveX from './src/screens/move/MoveX';
import MoveY from './src/screens/move/MoveY';
import MoveXY from './src/screens/move/MoveXY';
import Interpolation from './src/screens/interpolation/Interpolation';
import Spring from './src/screens/spring/Spring';
import MultipleAnimation from './src/screens/multiple/MultipleAnimation';
import Sequence from './src/screens/multiple/Sequence';
import Parallel from './src/screens/multiple/Parallel';
import Delay from './src/screens/multiple/Delay';
import Stagger from './src/screens/multiple/Stagger';
import Loop from './src/screens/loop/Loop';
import StartStop from './src/screens/startstop/StartStop';
import AdvancedOptions from './src/screens/advanced/AdvancedOptions';
import Drag from './src/screens/advanced/Drag';
import DragDrop from './src/screens/advanced/DragDrop';

const AppNavigator = createStackNavigator({
  Home,
  FadeOptions,
  FadeIn,
  FadeOut,
  ScaleOptions,
  ScaleX,
  ScaleY,
  ScaleXY,
  MoveOptions,
  MoveX,
  MoveY,
  MoveXY,
  Interpolation,
  Spring,
  MultipleAnimation,
  Sequence,
  Parallel,
  Delay,
  Stagger,
  Loop,
  StartStop,
  AdvancedOptions,
  Drag,
  DragDrop,
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
