import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin: 200px;
`;

export default App = () => (
  <Container>
    <Image source={require('./img/jeopardy-js.png')}/>
  </Container>
);

export const mainNavigator = TabNavigator({
  Home: {
    screen: App,
    path: ''
  }
});

App.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/js.png')}/>
  )
}