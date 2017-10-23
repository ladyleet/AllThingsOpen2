import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';

const data = [{
  Q: "The company that created React.",
  A: "What is Facebook?"
},{
  Q: "What happens during the lifecycle of a React component?",
  A: "Initialization, State/property updates, Destruction"
},{
  Q: "True or False: JSX a requirement in React.",
  A: "What is false?"
},{
  Q: "A popular flux framework.",
  A: "What is Redux, Flummox, Alt, Fluxible, etc?"
},{
  Q: "A component that is a function of the properties provided to it.",
  A: "What are stateless components?"
},{
  Q: "True or False: React is an MVC based framework.",
  A: "What is false?"
},{
  Q: "_____ needs to be updated to achieve dynamic UI updates.",
  A: "What is state?"
},{
  Q: "The API necessary for every React component.",
  A: "What is render?"
},{
  Q: "React focuses on this part of MVC.",
  A: "What is view?"
},{
  Q: "The name of the CLI used to create react apps.",
  A: "What is create-react-app?"
}];

const Container = styled.View`
  margin: 10px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
`;

export default ReactJeopardy = () => (
  <Container>
    <TextStyled>
      <Image source={require('./img/jeopardy-angular.png')}/>
    </TextStyled>
  </Container>
);

ReactJeopardy.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/angular.png')}/>
  )
}
